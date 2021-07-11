# 搜索引擎

1. 创建 manifest.json

   ```json
   {
     "name": "SearchEngine",
     "description": "Search Engine Hot Key.",
     "version": "1.0",
     "manifest_version": 3,
     "background": {
       "service_worker": "background.js"
     },
     "action": {
       // 弹出框
       "default_popup": "popup.html",
       // 扩展程序 logo
       "default_icon": {
         "16": "/icons/search16x16.png",
         "32": "/icons/search32x32.png",
         "48": "/icons/search48x48.png",
         "128": "/icons/search128x128.png"
       }
     },
     "icons": {
       "16": "/icons/search16x16.png",
       "32": "/icons/search32x32.png",
       "48": "/icons/search48x48.png",
       "128": "/icons/search128x128.png"
     },
     "permissions": ["tabs"] // 授权 tabs
   }
   ```

2. 创建 backgroud.js

3. 创建 popup.html
