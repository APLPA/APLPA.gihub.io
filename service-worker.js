/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2019/02/18/hello/index.html","44842f40baa6e0d3e6ee007e074be6a2"],["/about/index.html","47d6c2f77687e3e12173ae9e5e06207b"],["/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["/archives/2019/02/index.html","1e9b51b5bb1094ddc28a415d6b109aab"],["/archives/2019/index.html","5b121b994e9ccd013c758dc7e1d80c92"],["/archives/index.html","fa63a37e37d997aea47865999295c1e9"],["/atom.xml","5bfaf3fe18bad1dc12b699c21b69b1f7"],["/browserconfig.xml","a1327babc882f9875f57f5b367c9ffc9"],["/coc/index.html","1380aebf2d1c1fc9a773f905bef0e51b"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","d432ae63ec1141352fd8b1e1bd26b6c5"],["/css/page.css","7ab27cfb2d9194af997ca6ad0a4b5a1b"],["/css/search.css","75da01ae1d9e1561ab3df1b4ad6ef3b7"],["/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["/guide/deployment.html","be96515c673712671d042337366ddf63"],["/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["/guide/instance.html","61021765831307e8278d034c23502dd6"],["/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["/guide/list.html","772e05d65b4587501785906a4b681efd"],["/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["/guide/transitions.html","4513c62165ee217697830a40e1795365"],["/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/images/check.png","c634675b753a1a03b587c43d8b535600"],["/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/images/dcloud.gif","b6f12416bda47e75f829da47479483ba"],["/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/images/down.png","2f948222df409af3121254d5fe0ed377"],["/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/images/frontend_love.png","b514babc53a0f3ddc854b0b14a54a489"],["/images/geekbang-ad.jpg","980250c419ffdb2573f26fdbde209026"],["/images/geekbang-vue-ad.gif","e7fae85ac459b6e43a71948c0561ef12"],["/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/images/hn.png","99176cdebac521e823be519aef514bb3"],["/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/images/icons/favicon.png","73b24148aef84317e1a8c8c27f87ec7c"],["/images/icons_8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/images/logo.png","a2609aef84fe2c016969ed0c5803be28"],["/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/images/valuecoders.png","1bccdd1583af0609cada15218d98a2f4"],["/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/images/youku.png","1cce2782971aed63d38b17e28614d512"],["/images/业务流程列表-创建.png","914b226db94913b7d73532f7c4091676"],["/images/业务流程列表.png","61821f5aa7386d4920a510284258b190"],["/images/业务流程设计.png","4741a364e8c4eb0c50ef3a119e39a674"],["/images/代码预览.png","267b5a712c3656e1bf6e210faf8e1d05"],["/images/修改流程id和name.png","c159a6ec37e168aa923237becf9de4f7"],["/images/准备删除.png","8ad407d324c2db17bff85ec6613ae30f"],["/images/创建业务流程.png","d0650d320ab432bfbc57159c9a6a239a"],["/images/创建岗位.png","88abc77fdeba938cc87e7107e3fbf07c"],["/images/创建表单.png","348149c6e558568b14c9154e6b7f1912"],["/images/创建角色完成.png","9e3a7fc97353fbdfaf5b9ec5c9c062c7"],["/images/发起流程测试.png","6c10e495c58da6a87197214581a251a1"],["/images/变量映射.png","5aa6f2ad293f469129c68ad1322d42eb"],["/images/填写表单字段.png","b635df9f116874e998c7bc35fdaae9c2"],["/images/多条件流程.png","71698dd75c2cade52466653d28240ffd"],["/images/审批流程.png","5f808b04276757e807f144136baa17f9"],["/images/授权菜单.png","8fa0660596df817dc76bc7b92944ea90"],["/images/提交审核流程.png","3f3ac303af4b6430041b0d2876bd00f7"],["/images/最终流程图.png","782f05193773c6ed7968b5018f1eee3e"],["/images/流程在线编辑.png","5fc3f66d2aba810ccc9fcbf7052f64ae"],["/images/流程引擎菜单-模版管理.png","eb40c3857f9f620c2f8ac4fd56e64e03"],["/images/流程模板管理-列表.png","7ff911a6f7b001f9b67ae2ddc8073479"],["/images/流程表单管理.png","2de09dff484dd1daadc49d20b5b100fc"],["/images/生成代码.png","59029836fca6b83ef08d980f5f1b8221"],["/images/空白流程图.png","5b9c82f8b1276a21642e5267eff0e783"],["/images/编辑角色.png","592976cd66ec680c46799bbeaf994043"],["/images/自定义表单.png","572cad05b13bf587b33da1943c8e298c"],["/images/节点配置角色.png","ec2d352dc16db759329d0253ad31218e"],["/images/设计表单按钮.png","7bb0f860770ee6075bbd74d27ef77005"],["/images/请假申请流程.png","58aa3c0825d8743ec2604efe5d461920"],["/images/费用报销流程.png","4b02ca6b763c2c8fe8567b3aeede9495"],["/images/赋予角色.png","efbc6e0c89def720d925071e028c93e9"],["/images/部署流程.png","876c3b2e5b12c9f5c07376da6835b99d"],["/images/金额大于等于500.png","2c62a740095cf65fad957ade5aa5f37e"],["/images/金额表达式.png","a7a251bf55941cb5ecfc887c3768da7e"],["/index.html","5533e2b6310a15ee5c7544d6bbd5b579"],["/js/common.js","83ee0c22ca4b71aba9f963ff8e6a306a"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","cbe2b9b2fb6955decf033515d079e44b"],["/js/vue.min.js","5283b86cbf48a538ee3cbebac633ccd4"],["/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["/menu/index.html","791698ce526f796d43af88ba7c2ff9c5"],["/perf/index.html","08e9274cf60920f69f530247bcbf1e6d"],["/support-vuejs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/v2/api/indexq.html","d5c56eff614761bfb5f30b45f5ab4774"],["/v2/cookbook/adding-instance-properties.html","c4a31767f4128916bc36bb1177756f42"],["/v2/cookbook/avoiding-memory-leaks.html","fbeb390a94dde67e3560b2a5e81e1c5d"],["/v2/cookbook/client-side-storage.html","20dbde898556e3e2ecdc6fd1dc412bdb"],["/v2/cookbook/creating-custom-scroll-directives.html","d8144522a2ae2c6092dbf78ac7433413"],["/v2/cookbook/debugging-in-vscode.html","21277a1d9045ff224d1d2a4e624fca7c"],["/v2/cookbook/dockerize-vuejs-app.html","1d48a5a836d04562f88c7117c7373298"],["/v2/cookbook/editable-svg-icons.html","f785110a10d0d770485c680d80b8e264"],["/v2/cookbook/form-validation.html","d1de6123ad345fc7c058d0586bb9e0f9"],["/v2/cookbook/index.html","11cbc01c19550303b35e7be80ef4c97c"],["/v2/cookbook/packaging-sfc-for-npm.html","d9775bc7108bf01d0ec5cc09c96f345f"],["/v2/cookbook/practical-use-of-scoped-slots.html","e09a697053d1bf7710733fcdcdc61023"],["/v2/cookbook/serverless-blog.html","cbbd6381a6e8cb2025175565e7465710"],["/v2/cookbook/unit-testing-vue-components.html","72ff54195ca7a63fc3cd098490d26800"],["/v2/cookbook/using-axios-to-consume-apis.html","04a54038cb03b352732bc701ddb147fa"],["/v2/examples/commits.html","081039b71aadb6f398dc50426a850040"],["/v2/examples/deepstream.html","df444b6d31c57dba2c3c89613ccf3a19"],["/v2/examples/elastic-header.html","5682f9a31b0c2ffd36b4a05ee60800cc"],["/v2/examples/firebase.html","2edf2ed256806190d9024d05f033cee3"],["/v2/examples/grid-component.html","58315dd7172c914c16f14af55eb4be12"],["/v2/examples/hackernews.html","bff2a6d9aa8ae74283d93961d41c1c51"],["/v2/examples/index.html","c40b9649c07ec54c92c25751de96d2f6"],["/v2/examples/modal.html","75f67cb959f02feb7a9ae17fb42e1644"],["/v2/examples/select2.html","b4e5366f63146a077c981e7b4ea75c62"],["/v2/examples/svg.html","4b78b4f46bef4ef34e7151566607ea99"],["/v2/examples/todomvc.html","2d7a470a5e2aa2580aa3186c273e3948"],["/v2/examples/tree-view.html","eb1dfacc5ad28db2ede3433cbd455efb"],["/v2/guide/class-and-style.html","45a5516b88e11f590f89a4b96ada74c6"],["/v2/guide/comparison.html","6db4176d7140fa08662fde3bad96bb0d"],["/v2/guide/components-custom-events.html","6b2380d8eb6fc3f852ad9ac9ae382acc"],["/v2/guide/components-dynamic-async.html","be49acc9b885646fd925c48a8bcb1630"],["/v2/guide/components-edge-cases.html","1f2a002c6f7c8e7c5b529d8dbcaa6c4d"],["/v2/guide/components-props.html","1689a74520293c1c1dd15dcd1a16b497"],["/v2/guide/components-registration.html","0de86149eb8b75574316b2bc29ff7f4c"],["/v2/guide/components-slots.html","142a711694fb54b4546d12927e1023bd"],["/v2/guide/components.html","a4a44bc19d1db7928c08dab8ef570ea3"],["/v2/guide/computed.html","91ebd4d395d69576c2c15334a113258c"],["/v2/guide/conditional.html","1c1ae6c09dd62fc7395b65316a78a4df"],["/v2/guide/custom-directive.html","6c9f0aaec82149b4b87e6cf772ef4978"],["/v2/guide/deployment.html","3a9f620e02242fb4eb6515e6f7a66522"],["/v2/guide/events.html","41fbf0334c9699af1f2ae3b1ee7ea0c8"],["/v2/guide/filters.html","089c033c1f78997a9f36a54f1a2c2053"],["/v2/guide/forms.html","c416083cb798ea53c98273bb202f695a"],["/v2/guide/index.html","de80ce7546a78e881702b70b6158efba"],["/v2/guide/installation.html","9cf5c283727a31eb3266a2332307c91c"],["/v2/guide/instance.html","0b5276b1e71f1142b70e895a4fcdd5a8"],["/v2/guide/join.html","d2dfd4790edf70bf2271daef5cb14904"],["/v2/guide/list.html","5a971827cee21ecced94ea7dc175e4a7"],["/v2/guide/migration-vue-router.html","f52ab52bc0c32ad514afe6f052ff43fa"],["/v2/guide/migration-vuex.html","4f5145ab9e805fe62111ac693d788a78"],["/v2/guide/migration.html","b6670338e66b6eab607eea9053d9ade1"],["/v2/guide/mixins.html","92c94c52ddce4543eeba5f0c4a32b6eb"],["/v2/guide/plugins.html","eea9c65bea4d9a6670b5af82f56b05f6"],["/v2/guide/reactivity.html","1910699e712cf939d502981f0bdfaa59"],["/v2/guide/render-function.html","f68664be943715305319fd72c8382019"],["/v2/guide/routing.html","360e000f0c7ac8feaefe20f6e5c85da1"],["/v2/guide/single-file-components.html","3d5940d967c78bc88692e995b1813030"],["/v2/guide/ssr.html","0c59a87554cb795ce4008eafdcf7b59a"],["/v2/guide/state-management.html","b826281a79538d145cd492d78ddd5143"],["/v2/guide/syntax.html","a6ff042941397c78cd7c3045ffb999b8"],["/v2/guide/team.html","6ef43f6fee1398644d16add674afcb92"],["/v2/guide/transitioning-state.html","3b5807c516657c1f5bde4f6746cdb7dc"],["/v2/guide/transitions.html","36e3cb376b3cab3939461b9ca5654f87"],["/v2/guide/typescript.html","5c2aa4e6d924df867bb4a93820144828"],["/v2/guide/unit-testing.html","6236f0e99f1af090e0f42d44690d929b"],["/v2/search/index.html","01316614ccd3b043111f379dae578563"],["/v2/style-guide/index.html","390a96bac700dcba6904777fe7c56764"],["/v2/workflow/index.html","cf42128f7d1f6c435aaa86f2931c05ae"],["/v2/workflow/indexq.html","212d8c26802378667803e51709944c23"],["/v2/workflow/workflow-image/业务流程列表-创建.png","914b226db94913b7d73532f7c4091676"],["/v2/workflow/workflow-image/业务流程列表.png","61821f5aa7386d4920a510284258b190"],["/v2/workflow/workflow-image/业务流程设计.png","4741a364e8c4eb0c50ef3a119e39a674"],["/v2/workflow/workflow-image/代码预览.png","267b5a712c3656e1bf6e210faf8e1d05"],["/v2/workflow/workflow-image/修改任务类型.png","7a8a20c0e86d082475e897d7c250f0e0"],["/v2/workflow/workflow-image/修改流程id和name.png","c159a6ec37e168aa923237becf9de4f7"],["/v2/workflow/workflow-image/准备删除.png","8ad407d324c2db17bff85ec6613ae30f"],["/v2/workflow/workflow-image/创建业务流程.png","d0650d320ab432bfbc57159c9a6a239a"],["/v2/workflow/workflow-image/创建岗位.png","88abc77fdeba938cc87e7107e3fbf07c"],["/v2/workflow/workflow-image/创建表单.png","348149c6e558568b14c9154e6b7f1912"],["/v2/workflow/workflow-image/创建角色完成.png","9e3a7fc97353fbdfaf5b9ec5c9c062c7"],["/v2/workflow/workflow-image/发起流程测试.png","6c10e495c58da6a87197214581a251a1"],["/v2/workflow/workflow-image/变量映射.png","5aa6f2ad293f469129c68ad1322d42eb"],["/v2/workflow/workflow-image/填写表单字段.png","b635df9f116874e998c7bc35fdaae9c2"],["/v2/workflow/workflow-image/多条件流程.png","71698dd75c2cade52466653d28240ffd"],["/v2/workflow/workflow-image/审批流程.png","5f808b04276757e807f144136baa17f9"],["/v2/workflow/workflow-image/授权菜单.png","8fa0660596df817dc76bc7b92944ea90"],["/v2/workflow/workflow-image/提交审核流程.png","3f3ac303af4b6430041b0d2876bd00f7"],["/v2/workflow/workflow-image/最终流程图.png","782f05193773c6ed7968b5018f1eee3e"],["/v2/workflow/workflow-image/流程业务功能.png","8ce704a0d4d1557d5066ba44456e6806"],["/v2/workflow/workflow-image/流程在线编辑.png","5fc3f66d2aba810ccc9fcbf7052f64ae"],["/v2/workflow/workflow-image/流程引擎菜单-模版管理.png","eb40c3857f9f620c2f8ac4fd56e64e03"],["/v2/workflow/workflow-image/流程模板管理-列表.png","7ff911a6f7b001f9b67ae2ddc8073479"],["/v2/workflow/workflow-image/流程菜单.png","c922e4e35618b32f2cdf33f600aed5d0"],["/v2/workflow/workflow-image/流程表单管理.png","2de09dff484dd1daadc49d20b5b100fc"],["/v2/workflow/workflow-image/生成代码.png","59029836fca6b83ef08d980f5f1b8221"],["/v2/workflow/workflow-image/空白流程图.png","5b9c82f8b1276a21642e5267eff0e783"],["/v2/workflow/workflow-image/编辑角色.png","592976cd66ec680c46799bbeaf994043"],["/v2/workflow/workflow-image/自定义表单.png","572cad05b13bf587b33da1943c8e298c"],["/v2/workflow/workflow-image/节点配置角色.png","ec2d352dc16db759329d0253ad31218e"],["/v2/workflow/workflow-image/设计表单按钮.png","7bb0f860770ee6075bbd74d27ef77005"],["/v2/workflow/workflow-image/费用报销流程.png","4b02ca6b763c2c8fe8567b3aeede9495"],["/v2/workflow/workflow-image/赋予角色.png","efbc6e0c89def720d925071e028c93e9"],["/v2/workflow/workflow-image/部署流程.png","876c3b2e5b12c9f5c07376da6835b99d"],["/v2/workflow/workflow-image/部署费用流程.png","d3bbcf1cfa990a2a53607bfe9996a551"],["/v2/workflow/workflow-image/金额大于等于500.png","2c62a740095cf65fad957ade5aa5f37e"],["/v2/workflow/workflow-image/金额表达式.png","a7a251bf55941cb5ecfc887c3768da7e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




