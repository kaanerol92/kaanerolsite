'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cf8ecb282d4c283d63165a113e268a31",
".git/config": "daeaf73cce7523f3920d3666c557af1a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d69bb217ad909eb6b84601fd3bab4a3f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c48aa36998330ee2623095f6222a56ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e505c85b4c5b7f64054e0e0fbc04764a",
".git/logs/refs/heads/master": "e505c85b4c5b7f64054e0e0fbc04764a",
".git/logs/refs/remotes/origin/master": "06bc9a5ce209a64cadfa7e8d1c5f2c19",
".git/objects/08/4a35e29ff181cd8e1cb75e63e568ed08f62105": "a57e1107ebb236297d73ad640382e5e6",
".git/objects/0a/4eaae61e9fe33ff87225f45ac0b5856859fd24": "4aa8690da21e2ee211d685f439cd3479",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/15/2cb793534b98aef9ad4a395eef4454d09ffcda": "0963b137af37eea06367955b8ce1ffcb",
".git/objects/18/fd60e151168ecc1e3f451879581a1c1ae9db2a": "f06bb969bb84299e1ec1b5ec06fcdebb",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/24/153889b4d6fe9027183f0e75a3540024aa2a9d": "6cb7121b814dfa0682f3205d1a6b709b",
".git/objects/27/f46ad5f13a67166cdbeaade6401732c7117242": "8de40be49b7edab894eea1159f063080",
".git/objects/29/6872ffddb1a6cb92c9609671384dfebcd35143": "3631962427507309095cc90c26752ca5",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/5e7d827efda570e7524d0a4ec1696010754e80": "410927b6468432f325d90ea8cb659ba2",
".git/objects/31/b8c499d9fda6f225db88c407912ff6509be179": "a05f623a90709c00827cf382c7db7741",
".git/objects/35/809b8aff0d26bd47a3b6924c148deb7e53a9aa": "d5a88ea945699df98b9186d12dd42960",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/37/c2382982bfb3ca5a5797aae1f0c3358dc216c0": "2bdd85d4312b271b5785a5dbe881783e",
".git/objects/3a/ea3fe1e3215178dfa8242754aa6fe9483bf4fb": "212f6075e00eb30ea942bdd6d7f4e47f",
".git/objects/3c/3077cdfb960a9911b75634c1fde8bf3f686bc3": "f90b79d871e9e3d9ffd0ff880eb314c8",
".git/objects/3f/3a62f9fe384379b60eb2c129d2dd5c5fd9aeaf": "8183336f57aa2d4b457740e451e51d6b",
".git/objects/3f/685ff561693714c27a33de0a68cdda73b934e5": "180bc29d623c4f12a06d3c2d534d0c82",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/c37d934f2961458da5d0282f59eeabd56795b5": "473ecde0794d9f010e180c14773ac92c",
".git/objects/50/d77e7cebb7125618a39e653f59f6e4202fc02e": "4ddc4fc401b28a118bd4c1dffed0f341",
".git/objects/52/392d4d627a2f28cc1c6dc1ed11ddf2eaa66e50": "8aec43a626627e5869f5db9fde977ea5",
".git/objects/54/59343266ec07d1fc551fea02d0642e5dde4bc2": "64357fa5105ae1a4de4a7adb512f3895",
".git/objects/57/112acbd58f08c05948c39273f3bdd711f5cf76": "87386391ffdd67626ec6212d73b016eb",
".git/objects/5a/f0effcfd35a2fb0a34fafeb3ec1a52eafe5568": "5af8ee8f92a0e1925010e5cec1001cbf",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/61/5c8b2aa7b1d3f228c9495aac35f5e770e23d09": "8aba30f7c3045d23daa46ae065887e1a",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/69/132392affcb94d37fcd1a92ee8ce49caca3625": "454dc7c6236bd9bc225c644aef1cc4e0",
".git/objects/6b/87d0b25e272d06d2486733754cb56b2776dece": "f3027561616c6d082bc7f548d4314fd6",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/0ad87e0dd2c735e70bf980ea78b62baac26bbb": "eaaede41e0c6ce653b8411580dee3fcb",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/73/dc65ac849a44d100bfe839664ba0184f42da9f": "bc04f7b7fa187ce7057f1e87bbc624a5",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/82/1e371c67af95f27218eb35160d8764ebb9ccf8": "33d7c05f0e44fb961da21272264c31d2",
".git/objects/86/2c18457bdede314539f5a7ab807b00783841f5": "6590ba368d0439cfd0b3ce74655c5f6a",
".git/objects/86/ca9e91ac8f7f77b2946e83c65706e42490aed7": "f4f4099fa6baff1ddd92a721b21bcf34",
".git/objects/87/6a02ae499f4649cfcabe4a63ff0f4cb5498cd7": "932b90a2bab00ece2f7e2c9b38a81d27",
".git/objects/88/4d4e72d4db35994f45e0bf4efa8b223159a484": "18917244aef14fa23deeb0550d3c0888",
".git/objects/88/651a9ef45ee220160e4f9504baad9152bde027": "6f4bcbbfe803a19d20d04af3e6a58977",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b35843c1577ed292bfda42630390716007fc46": "2c1a11be90a7d17e2c1f8e82759353b7",
".git/objects/8a/de6a033b1c453b8662731425af2ff1f69601ea": "17b857e398ba1c6ff0c58a829cead833",
".git/objects/8d/40722cb990230e490e59bb40eb6441de2e9953": "f125220e038f22501f465d20f76fb873",
".git/objects/90/82808c9e3d284c0c46db823dafcb5b6486de16": "64735cd789edff7d201ac51a75427c89",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/97/2cd51480484c8b164883b162a33e79e0d4d528": "bca63c57a1054a53e6e25cc0397059ac",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/bda5d76c310008562b430b3ee9266fbcea1806": "05cdbcf9ba594f13204bc0047df56fc0",
".git/objects/a0/070e228094e972aa32885c39db31bd1d191742": "58b8ac16bfda01e686ca927a5c302a41",
".git/objects/a0/5a38a5bf1c26632c8942d3c0412d67a19d7228": "30f10baebc1f091ea04c08de133918ad",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a2/01333358c79616e93fe7f015b5bc0d142a29ec": "90490bd8b73c15310c2bd60ce53ca50c",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a3/b748e9cd20d6036275385573f6545cbd79fd5a": "25dc1791563e3b14e3139e00916072a2",
".git/objects/a3/d238f75c691cb26d53a7ebaaa5f3762815288b": "cd8750c501ecdfda667e08ee7388153b",
".git/objects/ad/785cac64f5dfd0d80db98795baf2bca4728d6c": "0aa0208c68fd64461b7c2feeed4fd3d2",
".git/objects/ae/1ca47cd09ff877ef44c65ff88aaaae400e87b2": "14d2e50b3d1b2b4d198cc3954f667972",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b5/23ff59601f0783ce95360ac02977c56c4610f8": "aa715f391cc1a21819e8379bccd48876",
".git/objects/bc/c35352393f7282d919be50f472dcc920f1ee91": "528bd8a69f605a13dad1ea1c98dbe89d",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c4/b3df4d5a7d27b84800532889884304e7f3220c": "536b9e2c2d4024081ffa2d105a5baceb",
".git/objects/c7/33ba6d854e26ea258ad86cf580cdd56b338782": "8f5a9291dd5561498b490f7f7cb7e668",
".git/objects/c8/4666f8afc7f081a389e968efdd8bca94333dae": "9e158a39de7f702868f9009c5b3a5273",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/d94d2983a80009071da7f0780ea29d66897aec": "7ce2a9c6cfaca476acef7c7d4d928898",
".git/objects/cf/ae2f4d6be31078c984b0c7e5c5c691c45d3a73": "4bc38efbcabb519f3cf65425d0ab1d1b",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d5/b44d2a472970a84cc6bf80bc59ff1334b05940": "373ac11665c76616185a10bb03df7358",
".git/objects/d7/587f5341ec2d74a42379a82970c5b1724090d1": "84c88ce136335d7a4e29e66bc5791e62",
".git/objects/dc/19588e61b009cdf9c604dc1b3672c74c3f0f8d": "cef323c371e1dfef0faa265fcd25e3d4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/8aea85e5176943ee7e8a7469e43b033634840f": "bd300feb4f64fb97504598b7eba7cf67",
".git/objects/e3/a4c3dd0a42cf7cbad5c06f641ef0f0b53a1842": "b5af350d3dda6cedbed1e9d3eb79fe14",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e9/3d72aef85d3dc642b922a6285f79290244b4d7": "38caa11fde7bc45b6db5e931d6c1b34e",
".git/objects/ee/1484109edc62594492d3b2d90be03a12db91bc": "43aa4fb0ab94cdc2122b6811839a1bbb",
".git/objects/f4/024bc138f17f7556837ec21dee63a0e2941872": "abc4758224cf90be3c53f04b65b83330",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/ff/5fd8d782c05ad8ff50ecac4c2e70c732ae2125": "5830a0408d0b22ac986b91801b50bf0d",
".git/refs/heads/master": "50a61cc6456013c1744f3fcc76c8de64",
".git/refs/remotes/origin/master": "96192af7b3e177efbb9d0d0ac8065920",
"assets/AssetManifest.json": "e761bc6879ac01d01e872702a5c067ca",
"assets/background.png": "a8280b30773debf412a2a69e2dedb675",
"assets/backgroundhigh.png": "db72ad503b82bff98e6e871c522646b6",
"assets/enText.json": "fbd3e397f92fbd9c953bb0d907d74229",
"assets/expbackground.jpg": "2ba06fc7b38c04c167b0cbe58b9efd07",
"assets/FontManifest.json": "f67cebcedcf99eaf92fab8686f965661",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "933b1bda715fb1cc99e4a47881a59e94",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/profile.jpg": "fdaee798808b683c0149d01c0d556387",
"assets/profile2.png": "f0aa84837349f11228f3095f989a05d8",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"assets/text.json": "cfcd7859836fba005a56132806c627b9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"CNAME": "381835a0875b80553bb3f2831c9d4d90",
"favicon.ico": "fc8cc597667c1debbde2e378d8be26ed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "a280e0e27afc0e7ff4550303d1227365",
"icons/Icon-512.png": "a646af1b67b75a5efe4326a226218424",
"index.html": "b9461fffd5419426ab91671288a9fbca",
"/": "b9461fffd5419426ab91671288a9fbca",
"main.dart.js": "20cc48fdef3e1f9dbf8e8fec1aaafe47",
"manifest.json": "602edb81799a63764a035b40497e9cc8",
"splash/img/dark-1x.png": "ded3fc18f72edf71a371d19b86c8b249",
"splash/img/dark-2x.png": "11c0366dd4722b0b34d14feda457214b",
"splash/img/dark-3x.png": "ce9f548e2765e29a41b1e1148e03dc4e",
"splash/img/light-1x.png": "ded3fc18f72edf71a371d19b86c8b249",
"splash/img/light-2x.png": "11c0366dd4722b0b34d14feda457214b",
"splash/img/light-3x.png": "ce9f548e2765e29a41b1e1148e03dc4e",
"splash/style.css": "b2d253ea6cb855b74abaf0e8befb96e0",
"version.json": "3bad5cc9a64ff75a685569c83a375a0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
