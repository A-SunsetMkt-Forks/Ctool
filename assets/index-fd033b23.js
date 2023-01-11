import{bG as t,bu as v}from"./history-211513c4.js";import{J as c}from"./index-97821989.js";import{L as r,c as T,d as P}from"./index-a038b165.js";function o(e){return new T(P.define(e))}function m(e){return t(()=>import("./index-f7152274.js"),["./index-f7152274.js","./index-a038b165.js","./index-a4021e06.js","./index-57e0c792.js"],import.meta.url).then(n=>n.sql({dialect:n[e]}))}const d=[r.of({name:"C",extensions:["c","h","ino"],load(){return t(()=>import("./index-10f9c381.js"),["./index-10f9c381.js","./index-a4021e06.js","./index-a038b165.js"],import.meta.url).then(e=>e.cpp())}}),r.of({name:"C++",alias:["cpp"],extensions:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],load(){return t(()=>import("./index-10f9c381.js"),["./index-10f9c381.js","./index-a4021e06.js","./index-a038b165.js"],import.meta.url).then(e=>e.cpp())}}),r.of({name:"CQL",alias:["cassandra"],extensions:["cql"],load(){return m("Cassandra")}}),r.of({name:"CSS",extensions:["css"],load(){return t(()=>import("./index-ee7d0fdd.js"),["./index-ee7d0fdd.js","./index-a4021e06.js","./index-a038b165.js"],import.meta.url).then(e=>e.css())}}),r.of({name:"HTML",alias:["xhtml"],extensions:["html","htm","handlebars","hbs"],load(){return t(()=>import("./index-dd0f9e70.js"),["./index-dd0f9e70.js","./index-a4021e06.js","./index-a038b165.js","./index-ee7d0fdd.js","./index-9510bb60.js","./index-57e0c792.js"],import.meta.url).then(e=>e.html())}}),r.of({name:"Java",extensions:["java"],load(){return t(()=>import("./index-ee05fcf8.js"),["./index-ee05fcf8.js","./index-a4021e06.js","./index-a038b165.js"],import.meta.url).then(e=>e.java())}}),r.of({name:"JavaScript",alias:["ecmascript","js","node"],extensions:["js","mjs","cjs"],load(){return t(()=>import("./index-9510bb60.js"),["./index-9510bb60.js","./index-a4021e06.js","./index-a038b165.js","./index-57e0c792.js"],import.meta.url).then(e=>e.javascript())}}),r.of({name:"JSON",alias:["json5"],extensions:["json","map"],load(){return t(()=>import("./index-f6866608.js"),["./index-f6866608.js","./index-a4021e06.js","./index-a038b165.js"],import.meta.url).then(e=>e.json())}}),r.of({name:"JSX",extensions:["jsx"],load(){return t(()=>import("./index-9510bb60.js"),["./index-9510bb60.js","./index-a4021e06.js","./index-a038b165.js","./index-57e0c792.js"],import.meta.url).then(e=>e.javascript({jsx:!0}))}}),r.of({name:"MariaDB SQL",load(){return m("MariaSQL")}}),r.of({name:"Markdown",extensions:["md","markdown","mkd"],load(){return t(()=>import("./index-09c2a000.js"),["./index-09c2a000.js","./index-a038b165.js","./index-dd0f9e70.js","./index-a4021e06.js","./index-ee7d0fdd.js","./index-9510bb60.js","./index-57e0c792.js"],import.meta.url).then(e=>e.markdown())}}),r.of({name:"MS SQL",load(){return m("MSSQL")}}),r.of({name:"MySQL",load(){return m("MySQL")}}),r.of({name:"PHP",extensions:["php","php3","php4","php5","php7","phtml"],load(){return t(()=>import("./index-615882ba.js"),["./index-615882ba.js","./index-a4021e06.js","./index-a038b165.js","./index-dd0f9e70.js","./index-ee7d0fdd.js","./index-9510bb60.js","./index-57e0c792.js"],import.meta.url).then(e=>e.php())}}),r.of({name:"PLSQL",extensions:["pls"],load(){return m("PLSQL")}}),r.of({name:"PostgreSQL",load(){return m("PostgreSQL")}}),r.of({name:"Python",extensions:["BUILD","bzl","py","pyw"],filename:/^(BUCK|BUILD)$/,load(){return t(()=>import("./index-cea93711.js"),["./index-cea93711.js","./index-a4021e06.js","./index-a038b165.js","./index-57e0c792.js"],import.meta.url).then(e=>e.python())}}),r.of({name:"Rust",extensions:["rs"],load(){return t(()=>import("./index-ff5b15eb.js"),["./index-ff5b15eb.js","./index-a4021e06.js","./index-a038b165.js"],import.meta.url).then(e=>e.rust())}}),r.of({name:"SQL",extensions:["sql"],load(){return m("StandardSQL")}}),r.of({name:"SQLite",load(){return m("SQLite")}}),r.of({name:"TSX",extensions:["tsx"],load(){return t(()=>import("./index-9510bb60.js"),["./index-9510bb60.js","./index-a4021e06.js","./index-a038b165.js","./index-57e0c792.js"],import.meta.url).then(e=>e.javascript({jsx:!0,typescript:!0}))}}),r.of({name:"TypeScript",alias:["ts"],extensions:["ts"],load(){return t(()=>import("./index-9510bb60.js"),["./index-9510bb60.js","./index-a4021e06.js","./index-a038b165.js","./index-57e0c792.js"],import.meta.url).then(e=>e.javascript({typescript:!0}))}}),r.of({name:"WebAssembly",extensions:["wat","wast"],load(){return t(()=>import("./index-6ba9b666.js"),["./index-6ba9b666.js","./index-a038b165.js","./index-a4021e06.js"],import.meta.url).then(e=>e.wast())}}),r.of({name:"XML",alias:["rss","wsdl","xsd"],extensions:["xml","xsl","xsd","svg"],load(){return t(()=>import("./index-389b08e7.js"),["./index-389b08e7.js","./index-a4021e06.js","./index-a038b165.js"],import.meta.url).then(e=>e.xml())}}),r.of({name:"APL",extensions:["dyalog","apl"],load(){return t(()=>import("./apl-f73da2d7.js"),[],import.meta.url).then(e=>o(e.apl))}}),r.of({name:"PGP",alias:["asciiarmor"],extensions:["asc","pgp","sig"],load(){return t(()=>import("./asciiarmor-e7973ceb.js"),[],import.meta.url).then(e=>o(e.asciiArmor))}}),r.of({name:"ASN.1",extensions:["asn","asn1"],load(){return t(()=>import("./asn1-f9c290f0.js"),[],import.meta.url).then(e=>o(e.asn1({})))}}),r.of({name:"Asterisk",filename:/^extensions\.conf$/i,load(){return t(()=>import("./asterisk-9c249b4c.js"),[],import.meta.url).then(e=>o(e.asterisk))}}),r.of({name:"Brainfuck",extensions:["b","bf"],load(){return t(()=>import("./brainfuck-637b9bf0.js"),[],import.meta.url).then(e=>o(e.brainfuck))}}),r.of({name:"Cobol",extensions:["cob","cpy"],load(){return t(()=>import("./cobol-3c0e8dcf.js"),[],import.meta.url).then(e=>o(e.cobol))}}),r.of({name:"C#",alias:["csharp","cs"],extensions:["cs"],load(){return t(()=>import("./clike-26806385.js"),[],import.meta.url).then(e=>o(e.csharp))}}),r.of({name:"Clojure",extensions:["clj","cljc","cljx"],load(){return t(()=>import("./clojure-46c215dd.js"),[],import.meta.url).then(e=>o(e.clojure))}}),r.of({name:"ClojureScript",extensions:["cljs"],load(){return t(()=>import("./clojure-46c215dd.js"),[],import.meta.url).then(e=>o(e.clojure))}}),r.of({name:"Closure Stylesheets (GSS)",extensions:["gss"],load(){return t(()=>import("./css-ae0ae1d0.js"),[],import.meta.url).then(e=>o(e.gss))}}),r.of({name:"CMake",extensions:["cmake","cmake.in"],filename:/^CMakeLists\.txt$/,load(){return t(()=>import("./cmake-f314e514.js"),[],import.meta.url).then(e=>o(e.cmake))}}),r.of({name:"CoffeeScript",alias:["coffee","coffee-script"],extensions:["coffee"],load(){return t(()=>import("./coffeescript-cf6fb77c.js"),[],import.meta.url).then(e=>o(e.coffeeScript))}}),r.of({name:"Common Lisp",alias:["lisp"],extensions:["cl","lisp","el"],load(){return t(()=>import("./commonlisp-0ea12945.js"),[],import.meta.url).then(e=>o(e.commonLisp))}}),r.of({name:"Cypher",extensions:["cyp","cypher"],load(){return t(()=>import("./cypher-236a65ad.js"),[],import.meta.url).then(e=>o(e.cypher))}}),r.of({name:"Cython",extensions:["pyx","pxd","pxi"],load(){return t(()=>import("./python-37bee3fe.js"),[],import.meta.url).then(e=>o(e.cython))}}),r.of({name:"Crystal",extensions:["cr"],load(){return t(()=>import("./crystal-594a913c.js"),[],import.meta.url).then(e=>o(e.crystal))}}),r.of({name:"D",extensions:["d"],load(){return t(()=>import("./d-76ab4361.js"),[],import.meta.url).then(e=>o(e.d))}}),r.of({name:"Dart",extensions:["dart"],load(){return t(()=>import("./clike-26806385.js"),[],import.meta.url).then(e=>o(e.dart))}}),r.of({name:"diff",extensions:["diff","patch"],load(){return t(()=>import("./diff-1bf42f34.js"),[],import.meta.url).then(e=>o(e.diff))}}),r.of({name:"Dockerfile",filename:/^Dockerfile$/,load(){return t(()=>import("./dockerfile-c8a8b9da.js"),["./dockerfile-c8a8b9da.js","./simple-mode-851e42ff.js"],import.meta.url).then(e=>o(e.dockerFile))}}),r.of({name:"DTD",extensions:["dtd"],load(){return t(()=>import("./dtd-8d673f3f.js"),[],import.meta.url).then(e=>o(e.dtd))}}),r.of({name:"Dylan",extensions:["dylan","dyl","intr"],load(){return t(()=>import("./dylan-94e68d48.js"),[],import.meta.url).then(e=>o(e.dylan))}}),r.of({name:"EBNF",load(){return t(()=>import("./ebnf-9a58f677.js"),[],import.meta.url).then(e=>o(e.ebnf))}}),r.of({name:"ECL",extensions:["ecl"],load(){return t(()=>import("./ecl-8c848bde.js"),[],import.meta.url).then(e=>o(e.ecl))}}),r.of({name:"edn",extensions:["edn"],load(){return t(()=>import("./clojure-46c215dd.js"),[],import.meta.url).then(e=>o(e.clojure))}}),r.of({name:"Eiffel",extensions:["e"],load(){return t(()=>import("./eiffel-c812667a.js"),[],import.meta.url).then(e=>o(e.eiffel))}}),r.of({name:"Elm",extensions:["elm"],load(){return t(()=>import("./elm-389625db.js"),[],import.meta.url).then(e=>o(e.elm))}}),r.of({name:"Erlang",extensions:["erl"],load(){return t(()=>import("./erlang-72724d5c.js"),[],import.meta.url).then(e=>o(e.erlang))}}),r.of({name:"Esper",load(){return t(()=>import("./sql-62feda9f.js"),[],import.meta.url).then(e=>o(e.esper))}}),r.of({name:"Factor",extensions:["factor"],load(){return t(()=>import("./factor-7bfcb4fc.js"),["./factor-7bfcb4fc.js","./simple-mode-851e42ff.js"],import.meta.url).then(e=>o(e.factor))}}),r.of({name:"FCL",load(){return t(()=>import("./fcl-d5e95185.js"),[],import.meta.url).then(e=>o(e.fcl))}}),r.of({name:"Forth",extensions:["forth","fth","4th"],load(){return t(()=>import("./forth-a6c07be1.js"),[],import.meta.url).then(e=>o(e.forth))}}),r.of({name:"Fortran",extensions:["f","for","f77","f90","f95"],load(){return t(()=>import("./fortran-b746f455.js"),[],import.meta.url).then(e=>o(e.fortran))}}),r.of({name:"F#",alias:["fsharp"],extensions:["fs"],load(){return t(()=>import("./mllike-1f866598.js"),[],import.meta.url).then(e=>o(e.fSharp))}}),r.of({name:"Gas",extensions:["s"],load(){return t(()=>import("./gas-a519128b.js"),[],import.meta.url).then(e=>o(e.gas))}}),r.of({name:"Gherkin",extensions:["feature"],load(){return t(()=>import("./gherkin-0efe02ac.js"),[],import.meta.url).then(e=>o(e.gherkin))}}),r.of({name:"Go",extensions:["go"],load(){return t(()=>import("./go-dc2a3e6d.js"),[],import.meta.url).then(e=>o(e.go))}}),r.of({name:"Groovy",extensions:["groovy","gradle"],filename:/^Jenkinsfile$/,load(){return t(()=>import("./groovy-4592a472.js"),[],import.meta.url).then(e=>o(e.groovy))}}),r.of({name:"Haskell",extensions:["hs"],load(){return t(()=>import("./haskell-b620645c.js"),[],import.meta.url).then(e=>o(e.haskell))}}),r.of({name:"Haxe",extensions:["hx"],load(){return t(()=>import("./haxe-7215664e.js"),[],import.meta.url).then(e=>o(e.haxe))}}),r.of({name:"HXML",extensions:["hxml"],load(){return t(()=>import("./haxe-7215664e.js"),[],import.meta.url).then(e=>o(e.hxml))}}),r.of({name:"HTTP",load(){return t(()=>import("./http-e091c18d.js"),[],import.meta.url).then(e=>o(e.http))}}),r.of({name:"IDL",extensions:["pro"],load(){return t(()=>import("./idl-91cb7788.js"),[],import.meta.url).then(e=>o(e.idl))}}),r.of({name:"JSON-LD",alias:["jsonld"],extensions:["jsonld"],load(){return t(()=>import("./javascript-987cbb73.js"),[],import.meta.url).then(e=>o(e.jsonld))}}),r.of({name:"Jinja2",extensions:["j2","jinja","jinja2"],load(){return t(()=>import("./jinja2-580c43a7.js"),[],import.meta.url).then(e=>o(e.jinja2))}}),r.of({name:"Julia",extensions:["jl"],load(){return t(()=>import("./julia-2f39a740.js"),[],import.meta.url).then(e=>o(e.julia))}}),r.of({name:"Kotlin",extensions:["kt"],load(){return t(()=>import("./clike-26806385.js"),[],import.meta.url).then(e=>o(e.kotlin))}}),r.of({name:"LESS",extensions:["less"],load(){return t(()=>import("./css-ae0ae1d0.js"),[],import.meta.url).then(e=>o(e.less))}}),r.of({name:"LiveScript",alias:["ls"],extensions:["ls"],load(){return t(()=>import("./livescript-a3318e59.js"),[],import.meta.url).then(e=>o(e.liveScript))}}),r.of({name:"Lua",extensions:["lua"],load(){return t(()=>import("./lua-ee237842.js"),[],import.meta.url).then(e=>o(e.lua))}}),r.of({name:"mIRC",extensions:["mrc"],load(){return t(()=>import("./mirc-c043bc0a.js"),[],import.meta.url).then(e=>o(e.mirc))}}),r.of({name:"Mathematica",extensions:["m","nb","wl","wls"],load(){return t(()=>import("./mathematica-4db1ec63.js"),[],import.meta.url).then(e=>o(e.mathematica))}}),r.of({name:"Modelica",extensions:["mo"],load(){return t(()=>import("./modelica-c19c47b8.js"),[],import.meta.url).then(e=>o(e.modelica))}}),r.of({name:"MUMPS",extensions:["mps"],load(){return t(()=>import("./mumps-82310ef4.js"),[],import.meta.url).then(e=>o(e.mumps))}}),r.of({name:"Mbox",extensions:["mbox"],load(){return t(()=>import("./mbox-b40e52ca.js"),[],import.meta.url).then(e=>o(e.mbox))}}),r.of({name:"Nginx",filename:/nginx.*\.conf$/i,load(){return t(()=>import("./nginx-0992a7c8.js"),[],import.meta.url).then(e=>o(e.nginx))}}),r.of({name:"NSIS",extensions:["nsh","nsi"],load(){return t(()=>import("./nsis-8fd66a07.js"),["./nsis-8fd66a07.js","./simple-mode-851e42ff.js"],import.meta.url).then(e=>o(e.nsis))}}),r.of({name:"NTriples",extensions:["nt","nq"],load(){return t(()=>import("./ntriples-8490b09b.js"),[],import.meta.url).then(e=>o(e.ntriples))}}),r.of({name:"Objective-C",alias:["objective-c","objc"],extensions:["m"],load(){return t(()=>import("./clike-26806385.js"),[],import.meta.url).then(e=>o(e.objectiveC))}}),r.of({name:"Objective-C++",alias:["objective-c++","objc++"],extensions:["mm"],load(){return t(()=>import("./clike-26806385.js"),[],import.meta.url).then(e=>o(e.objectiveCpp))}}),r.of({name:"OCaml",extensions:["ml","mli","mll","mly"],load(){return t(()=>import("./mllike-1f866598.js"),[],import.meta.url).then(e=>o(e.oCaml))}}),r.of({name:"Octave",extensions:["m"],load(){return t(()=>import("./octave-3f516c2f.js"),[],import.meta.url).then(e=>o(e.octave))}}),r.of({name:"Oz",extensions:["oz"],load(){return t(()=>import("./oz-a640e05c.js"),[],import.meta.url).then(e=>o(e.oz))}}),r.of({name:"Pascal",extensions:["p","pas"],load(){return t(()=>import("./pascal-bcac1c04.js"),[],import.meta.url).then(e=>o(e.pascal))}}),r.of({name:"Perl",extensions:["pl","pm"],load(){return t(()=>import("./perl-a9455719.js"),[],import.meta.url).then(e=>o(e.perl))}}),r.of({name:"Pig",extensions:["pig"],load(){return t(()=>import("./pig-3510ca5f.js"),[],import.meta.url).then(e=>o(e.pig))}}),r.of({name:"PowerShell",extensions:["ps1","psd1","psm1"],load(){return t(()=>import("./powershell-c2c54630.js"),[],import.meta.url).then(e=>o(e.powerShell))}}),r.of({name:"Properties files",alias:["ini","properties"],extensions:["properties","ini","in"],load(){return t(()=>import("./properties-aba123c1.js"),[],import.meta.url).then(e=>o(e.properties))}}),r.of({name:"ProtoBuf",extensions:["proto"],load(){return t(()=>import("./protobuf-1713bf80.js"),[],import.meta.url).then(e=>o(e.protobuf))}}),r.of({name:"Puppet",extensions:["pp"],load(){return t(()=>import("./puppet-3229bfe4.js"),[],import.meta.url).then(e=>o(e.puppet))}}),r.of({name:"Q",extensions:["q"],load(){return t(()=>import("./q-887a0cfa.js"),[],import.meta.url).then(e=>o(e.q))}}),r.of({name:"R",alias:["rscript"],extensions:["r","R"],load(){return t(()=>import("./r-3ca97919.js"),[],import.meta.url).then(e=>o(e.r))}}),r.of({name:"RPM Changes",load(){return t(()=>import("./rpm-aa81b362.js"),[],import.meta.url).then(e=>o(e.rpmChanges))}}),r.of({name:"RPM Spec",extensions:["spec"],load(){return t(()=>import("./rpm-aa81b362.js"),[],import.meta.url).then(e=>o(e.rpmSpec))}}),r.of({name:"Ruby",alias:["jruby","macruby","rake","rb","rbx"],extensions:["rb"],load(){return t(()=>import("./ruby-e88f1f8d.js"),[],import.meta.url).then(e=>o(e.ruby))}}),r.of({name:"SAS",extensions:["sas"],load(){return t(()=>import("./sas-4096b960.js"),[],import.meta.url).then(e=>o(e.sas))}}),r.of({name:"Sass",extensions:["sass"],load(){return t(()=>import("./sass-fe9762d1.js"),["./sass-fe9762d1.js","./css-ae0ae1d0.js"],import.meta.url).then(e=>o(e.sass))}}),r.of({name:"Scala",extensions:["scala"],load(){return t(()=>import("./clike-26806385.js"),[],import.meta.url).then(e=>o(e.scala))}}),r.of({name:"Scheme",extensions:["scm","ss"],load(){return t(()=>import("./scheme-ca3e6863.js"),[],import.meta.url).then(e=>o(e.scheme))}}),r.of({name:"SCSS",extensions:["scss"],load(){return t(()=>import("./css-ae0ae1d0.js"),[],import.meta.url).then(e=>o(e.sCSS))}}),r.of({name:"Shell",alias:["bash","sh","zsh"],extensions:["sh","ksh","bash"],filename:/^PKGBUILD$/,load(){return t(()=>import("./shell-86dd1d99.js"),[],import.meta.url).then(e=>o(e.shell))}}),r.of({name:"Sieve",extensions:["siv","sieve"],load(){return t(()=>import("./sieve-4b1eb6fb.js"),[],import.meta.url).then(e=>o(e.sieve))}}),r.of({name:"Smalltalk",extensions:["st"],load(){return t(()=>import("./smalltalk-b41561ee.js"),[],import.meta.url).then(e=>o(e.smalltalk))}}),r.of({name:"Solr",load(){return t(()=>import("./solr-7928d730.js"),[],import.meta.url).then(e=>o(e.solr))}}),r.of({name:"SML",extensions:["sml","sig","fun","smackspec"],load(){return t(()=>import("./mllike-1f866598.js"),[],import.meta.url).then(e=>o(e.sml))}}),r.of({name:"SPARQL",alias:["sparul"],extensions:["rq","sparql"],load(){return t(()=>import("./sparql-71156930.js"),[],import.meta.url).then(e=>o(e.sparql))}}),r.of({name:"Spreadsheet",alias:["excel","formula"],load(){return t(()=>import("./spreadsheet-9f4dc4c6.js"),[],import.meta.url).then(e=>o(e.spreadsheet))}}),r.of({name:"Squirrel",extensions:["nut"],load(){return t(()=>import("./clike-26806385.js"),[],import.meta.url).then(e=>o(e.squirrel))}}),r.of({name:"Stylus",extensions:["styl"],load(){return t(()=>import("./stylus-2d29a832.js"),[],import.meta.url).then(e=>o(e.stylus))}}),r.of({name:"Swift",extensions:["swift"],load(){return t(()=>import("./swift-b6dd686e.js"),[],import.meta.url).then(e=>o(e.swift))}}),r.of({name:"sTeX",load(){return t(()=>import("./stex-bf854b0c.js"),[],import.meta.url).then(e=>o(e.stex))}}),r.of({name:"LaTeX",alias:["tex"],extensions:["text","ltx","tex"],load(){return t(()=>import("./stex-bf854b0c.js"),[],import.meta.url).then(e=>o(e.stex))}}),r.of({name:"SystemVerilog",extensions:["v","sv","svh"],load(){return t(()=>import("./verilog-701759f4.js"),[],import.meta.url).then(e=>o(e.verilog))}}),r.of({name:"Tcl",extensions:["tcl"],load(){return t(()=>import("./tcl-9a9d281f.js"),[],import.meta.url).then(e=>o(e.tcl))}}),r.of({name:"Textile",extensions:["textile"],load(){return t(()=>import("./textile-27197230.js"),[],import.meta.url).then(e=>o(e.textile))}}),r.of({name:"TiddlyWiki",load(){return t(()=>import("./tiddlywiki-053c4b39.js"),[],import.meta.url).then(e=>o(e.tiddlyWiki))}}),r.of({name:"Tiki wiki",load(){return t(()=>import("./tiki-f8970e14.js"),[],import.meta.url).then(e=>o(e.tiki))}}),r.of({name:"TOML",extensions:["toml"],load(){return t(()=>import("./toml-fed73c05.js"),[],import.meta.url).then(e=>o(e.toml))}}),r.of({name:"Troff",extensions:["1","2","3","4","5","6","7","8","9"],load(){return t(()=>import("./troff-1c50c70f.js"),[],import.meta.url).then(e=>o(e.troff))}}),r.of({name:"TTCN",extensions:["ttcn","ttcn3","ttcnpp"],load(){return t(()=>import("./ttcn-a4846d83.js"),[],import.meta.url).then(e=>o(e.ttcn))}}),r.of({name:"TTCN_CFG",extensions:["cfg"],load(){return t(()=>import("./ttcn-cfg-0c96bcc1.js"),[],import.meta.url).then(e=>o(e.ttcnCfg))}}),r.of({name:"Turtle",extensions:["ttl"],load(){return t(()=>import("./turtle-b550492d.js"),[],import.meta.url).then(e=>o(e.turtle))}}),r.of({name:"Web IDL",extensions:["webidl"],load(){return t(()=>import("./webidl-beade871.js"),[],import.meta.url).then(e=>o(e.webIDL))}}),r.of({name:"VB.NET",extensions:["vb"],load(){return t(()=>import("./vb-e9655ff4.js"),[],import.meta.url).then(e=>o(e.vb))}}),r.of({name:"VBScript",extensions:["vbs"],load(){return t(()=>import("./vbscript-e62417ba.js"),[],import.meta.url).then(e=>o(e.vbScript))}}),r.of({name:"Velocity",extensions:["vtl"],load(){return t(()=>import("./velocity-5bdd1b6a.js"),[],import.meta.url).then(e=>o(e.velocity))}}),r.of({name:"Verilog",extensions:["v"],load(){return t(()=>import("./verilog-701759f4.js"),[],import.meta.url).then(e=>o(e.verilog))}}),r.of({name:"VHDL",extensions:["vhd","vhdl"],load(){return t(()=>import("./vhdl-288f0dde.js"),[],import.meta.url).then(e=>o(e.vhdl))}}),r.of({name:"XQuery",extensions:["xy","xquery"],load(){return t(()=>import("./xquery-f004ff15.js"),[],import.meta.url).then(e=>o(e.xQuery))}}),r.of({name:"Yacas",extensions:["ys"],load(){return t(()=>import("./yacas-d031e2ab.js"),[],import.meta.url).then(e=>o(e.yacas))}}),r.of({name:"YAML",alias:["yml"],extensions:["yaml","yml"],load(){return t(()=>import("./yaml-95012b83.js"),[],import.meta.url).then(e=>o(e.yaml))}}),r.of({name:"Z80",extensions:["z80"],load(){return t(()=>import("./z80-bb7f2654.js"),[],import.meta.url).then(e=>o(e.z80))}}),r.of({name:"MscGen",extensions:["mscgen","mscin","msc"],load(){return t(()=>import("./mscgen-96577242.js"),[],import.meta.url).then(e=>o(e.mscgen))}}),r.of({name:"Xù",extensions:["xu"],load(){return t(()=>import("./mscgen-96577242.js"),[],import.meta.url).then(e=>o(e.xu))}}),r.of({name:"MsGenny",extensions:["msgenny"],load(){return t(()=>import("./mscgen-96577242.js"),[],import.meta.url).then(e=>o(e.msgenny))}})],_=e=>{for(let n of d)if([n.name,...n.alias].map(a=>a.toLowerCase()).includes(e.toLowerCase()))return n;return null},i=(e,n,a)=>({name:e,alias:a||[],language_description:n||null}),l=[i("GraphQL"),i("Vue",_("html")),i("Angular",_("html")),i("HTML Table",_("html"),["html_table"]),i("PHP Array",_("php"),["php_array"]),i("Http Query String",null,["http_query_string"]),i("JSON Schema",_("json")),i("JavaScript PropTypes",_("TypeScript")),i("Flow",_("TypeScript")),i("Text"),i("CSV")],I=e=>{const n=_(e);if(n)return n;for(let a of l)if([a.name,...a.alias].map(u=>u.toLowerCase()).includes(e.toLowerCase())&&a.language_description)return a.language_description;return null},p=e=>{const n=_(e);if(n!==null)return n.name;for(let a of l)if([a.name,...a.alias].map(u=>u.toLowerCase()).includes(e.toLowerCase()))return a.name;return e},R=(()=>[...d.map(e=>e.name),...l.map(e=>e.name)].sort())(),s={javascript:{beautify:!0,compress:!0,load(){return t(()=>import("./javascript-82377a3a.js"),["./javascript-82377a3a.js","./base-f0edccdd.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./parser-babel-7316bba2.js"],import.meta.url).then(e=>e.formatter)}},json:{beautify:!0,compress:!0,load(){return t(()=>import("./json-50c39d72.js"),["./json-50c39d72.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./parser-babel-7316bba2.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},typescript:{beautify:!0,compress:!1,load(){return t(()=>import("./typescript-cc563b12.js"),["./typescript-cc563b12.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},markdown:{beautify:!0,compress:!1,load(){return t(()=>import("./markdown-930a63b1.js"),["./markdown-930a63b1.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},css:{beautify:!0,compress:!0,load(){return t(()=>import("./css-fbfb35fd.js"),["./css-fbfb35fd.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./parser-postcss-8bf78da2.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},less:{beautify:!0,compress:!1,load(){return t(()=>import("./less-cd6f27ad.js"),["./less-cd6f27ad.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./parser-postcss-8bf78da2.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},scss:{beautify:!0,compress:!1,load(){return t(()=>import("./scss-1706ec8f.js"),["./scss-1706ec8f.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./parser-postcss-8bf78da2.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},yaml:{beautify:!0,compress:!1,load(){return t(()=>import("./yaml-54f55070.js"),["./yaml-54f55070.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},html:{beautify:!0,compress:!0,load(){return t(()=>import("./html-0b03d457.js"),["./html-0b03d457.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./parser-html-1fc082b5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},xml:{beautify:!0,compress:!0,load(){return t(()=>import("./xml-da4cb5ed.js"),["./xml-da4cb5ed.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},php:{beautify:!0,compress:!1,load(){return t(()=>import("./php-48f2da1b.js"),["./php-48f2da1b.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},java:{beautify:!0,compress:!1,load(){return t(()=>import("./java-bbef72fb.js"),["./java-bbef72fb.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},sql:{beautify:!0,compress:!0,load(){return t(()=>import("./sql-32a1e3fd.js"),["./sql-32a1e3fd.js","./index-4fa5e3a9.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},vue:{beautify:!0,compress:!1,load(){return t(()=>import("./vue-b0631989.js"),["./vue-b0631989.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./parser-html-1fc082b5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},angular:{beautify:!0,compress:!1,load(){return t(()=>import("./angular-2ebb34b4.js"),["./angular-2ebb34b4.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}},graphql:{beautify:!0,compress:!1,load(){return t(()=>import("./graphql-f903e2ca.js"),["./graphql-f903e2ca.js","./standalone-cee981dd.js","./_commonjsHelpers-87174ba5.js","./base-f0edccdd.js"],import.meta.url).then(e=>e.formatter)}}},E=Object.keys(s).sort(),f=async e=>{const n=await s[e].load();return n.setName(e),n},h=e=>{const n=p(e);for(let a of E)if(p(a)===n)return a;return""},L=(e,n)=>{const a=h(e);return a!==""&&s[a][n]},x=async(e,n,a)=>{if(v.isObject(a)&&(a=c.stringify(a)),!L(e,n))return a;const u=h(e);return u===""?a:await(await f(u)).set(a).format(n)},V={simple:x,isEnable:L,load:f,languages:s,allLanguageType:E};export{I as a,R as b,V as f,p as g};
