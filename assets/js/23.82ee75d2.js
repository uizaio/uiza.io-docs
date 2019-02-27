(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{175:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[a._m(0),a._v(" "),a._m(1),a._v(" "),s("div",{staticClass:"vuepress-tabs"},[s("tabs",{attrs:{options:{useUrlFragment:!1}}},[s("tab",{attrs:{name:"iOS"}},[s("h4",{attrs:{id:"cocoapods-recommended"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cocoapods-recommended","aria-hidden":"true"}},[a._v("#")]),a._v(" CocoaPods (Recommended)")]),a._v(" "),s("p",[a._v("To integrate UizaSDK into your Xcode project using "),s("a",{attrs:{href:"http://cocoapods.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("CocoaPods"),s("OutboundLink")],1),a._v(", specify it in your "),s("code",[a._v("Podfile")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("pod "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'UizaSDK'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" iOS "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("\npod "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'UizaSDK_8'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" iOS "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("Then run the following command:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("pod "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"manual-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Manual Installation")]),a._v(" "),s("p",[a._v("Download "),s("a",{attrs:{href:"https://github.com/uizaio/uiza-sdk-player-ios/tree/master/UizaSDK.framework",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("UizaSDK.framework")]),s("OutboundLink")],1),a._v(" and drag it into your project, add it to Embbeded Binaries section")])]),a._v(" "),s("tab",{attrs:{name:"Android"}},[s("p",[s("strong",[a._v("Step 1. Add the JitPack repository to your build file")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("allprojects "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://jitpack.io'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[s("strong",[a._v("Step 2. Add the dependency")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("defaultConfig "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  \n  multiDexEnabled  "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  \ndependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//for playing video VOD, LIVE  ")]),a._v("\n  implementation "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:[lasted-release-number]'")]),a._v("        \n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//for live broadcaster  ")]),a._v("\n  implementation "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.github.uizaio.uiza-android-sdk-player:uizalivestream:[lasted-release-number]'")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("Get lasted release number "),s("a",{attrs:{href:"https://github.com/uizaio/uiza-android-sdk-player/blob/dev/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("HERE"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[s("em",[s("strong",[a._v("Please note if your project uses firebase")])]),a._v(":\n"),s("strong",[a._v("firebase-core")]),a._v(" & "),s("strong",[a._v("firebase-database")]),a._v(" ... should be same version:\nBasically, you need to bump all  "),s("em",[a._v("Play Services")]),a._v("  and  "),s("em",[a._v("Firebase")]),a._v("  libraries to their latest version (which may be different for each since version 15).")]),a._v(" "),s("p",[a._v("You may use  "),s("a",{attrs:{href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://mvnrepository.com/"),s("OutboundLink")],1),a._v("  to find the latest version for each library.\nSee also:  "),s("a",{attrs:{href:"https://firebase.google.com/support/release-notes/android#20180523",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://firebase.google.com/support/release-notes/android#20180523"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Check "),s("a",{attrs:{href:"https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/build.gradle",target:"_blank",rel:"noopener noreferrer"}},[a._v("example here"),s("OutboundLink")],1),a._v(".")])])],1)],1),a._v(" "),a._m(2),a._v(" "),s("div",{staticClass:"vuepress-tabs"},[s("tabs",{attrs:{options:{useUrlFragment:!1}}},[s("tab",{attrs:{name:"iOS"}},[s("p",[a._v("Always initialize the framework by the following line before calling any API functions:")]),a._v(" "),s("div",{staticClass:"language-swift line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("UizaSDK")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("UizaSDK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("initWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("appId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("YOUR_APP_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("YOUR_DOMAIN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("YOUR_APP_ID and YOUR_DOMAIN : get from registration email")]),a._v(" "),s("p",[a._v("TOKEN: generate from https://docs.uiza.io/#get-api-key")])]),a._v(" "),s("tab",{attrs:{name:"Android"}},[s("ol",[s("li",[a._v("appId : get in email at registration")]),a._v(" "),s("li",[a._v("token : generate "),s("a",{attrs:{href:"https://docs.uiza.io/#get-api-key",target:"_blank",rel:"noopener noreferrer"}},[a._v("HERE"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("li",[a._v("api : get in email at registration")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("App")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MultiDexApplication")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    UZUtil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("initWorkspace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" appId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("Manifest:")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("application")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v(".App "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("\x3c!--")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("important")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])],1)],1)])},[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"install-only-for-ios-android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-only-for-ios-android","aria-hidden":"true"}},[this._v("#")]),this._v(" Install (ONLY for iOS & Android)")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"initialize-only-for-ios-android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialize-only-for-ios-android","aria-hidden":"true"}},[this._v("#")]),this._v(" Initialize (ONLY for iOS & Android)")])}],!1,null,null,null);t.default=e.exports}}]);