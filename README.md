# Surgeconfig

***Personal surge config***



## Module

### AD Block

**Desc:**

More than 40K ad rules. Block common application ads, privacy tracking, behavior analysis, data statistics, flow statistics, web page hijacking.

**Effective Order:**

Low.

**Install:**

```
https://raw.githubusercontent.com/xxxbrian/Surgeconfig/main/Module/ADBlock.sgmodule
```

### MitM All Hostnames

**Desc:**

Perform MitM on all hostnames with port 443, except those to Apple and other common sites which can't be inspected. You still need to configure a CA certificate and enable the main switch of MitM.

**Effective Order:**

No effect.

**Install:**

```
https://raw.githubusercontent.com/xxxbrian/Surgeconfig/main/Module/AllMitM.sgmodule
```

### YouTube Advertising Block

**Desc:**

Removes all ads of YouTube: pre-roll video ads, text & banner ads.

**Effective Order:**

Low.

**Install:**

```
https://raw.githubusercontent.com/xxxbrian/Surgeconfig/main/Module/YouTubeAds.sgmodule
```



## Rule Set

### AD Block

**40K Ad Ruleset**

```
https://github.com/xxxbrian/Surgeconfig/blob/main/Rule/ADBlock.list
```

### Apple

**Apple Inc (ALL Countries) Ruleset**

```
https://github.com/xxxbrian/Surgeconfig/blob/main/Rule/Apple.list
```

### Bilibili

**Bilibili Ruleset (Web + App)**

```
https://github.com/xxxbrian/Surgeconfig/blob/main/Rule/Bilibili.list
```

### Tencent Video

**Tencent Video Ruleset**

```
https://github.com/xxxbrian/Surgeconfig/blob/main/Rule/TencentVideo.list
```



## Script

### YouTube Ads

Hide pic ads elements of YouTube Web.

```
[Script]
YouTube AD Block = type=http-response,pattern=^https?:\/\/www\.youtube\.com,requires-body=1,max-size=2097152,script-path=https://raw.githubusercontent.com/xxxbrian/Surgeconfig/main/Script/YouTubeAds.js
```



------



## TODO LIST

- [ ] Bilibili Region Auto Switch
- [x] YouTube AD Hide
- [ ] Content Farm Shield
- [ ] 18comic AD Rewrite
- [ ] Pornhub AD Rewrite