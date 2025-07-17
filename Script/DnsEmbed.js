// IP embed resolver (.ip suffix)

var qname = $domain || '';

// 1) 完整 IP 格式：xxx.xxx.xxx.xxx.ip → xxx.xxx.xxx.xxx
var fullMatch = qname.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.ip$/i);
if (fullMatch) {
  var ip = fullMatch[1] + '.' + fullMatch[2] + '.' + fullMatch[3] + '.' + fullMatch[4];
  $done({ address: ip, ttl: 60 });
} else {
  // 2) /24 随机格式：xxx.xxx.xxx.ip → xxx.xxx.xxx.X
  var net24Match = qname.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.ip$/i);
  if (net24Match) {
    var host = Math.floor(Math.random() * 254) + 1;  // 1-254
    var ip = net24Match[1] + '.' + net24Match[2] + '.' + net24Match[3] + '.' + host;
    $done({ address: ip, ttl: 5 });
  } else {
    // 3) 不匹配：返回空让系统继续处理
    $done({});
  }
}
