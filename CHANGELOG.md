# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 3.0.0 (2022-09-15)


### ⚠ BREAKING CHANGES

* from v2.0.0 on, you must import the css for the
component yourself, using `import 'react-sortable-tree/styles.css';`.
You only need to do this once in your application.
* `dndWrapExternalSource` api no longer exists.
You can achieve the same functionality and more with react-dnd
APIs, as demonstrated in the storybook example.
* **tree-to-tree:** `dropCancelled` and `addNewItem` callbacks on
external nodes wrapped with `dndWrapExternalSource` are now ignored.
Drag-and-drop now works without them.

### Features

* Add `shouldCopyOnOutsideDrop` prop to enable copying of nodes that leave the tree ([d6a9be9](https://github.com/frontend-collective/react-sortable-tree/commit/d6a9be9e4931b5f0dac7b87511d309694f42355e))
* add more parameters to rowHeight. Fixes [#199](https://github.com/frontend-collective/react-sortable-tree/issues/199) ([8ff0ff2](https://github.com/frontend-collective/react-sortable-tree/commit/8ff0ff22d207fc3914ae5ed4f4a88f07fdceaf35))
* add onDragStateChanged callback ([2caa9d1](https://github.com/frontend-collective/react-sortable-tree/commit/2caa9d1db68ccd80ecc5f421a88c20bbeb9cc42a))
* Add path argument to onVisibilityToggle callback ([25cd134](https://github.com/frontend-collective/react-sortable-tree/commit/25cd1349d6f8a59f59d5080a2d9fb20377b40a54))
* add storybook for onlyExpandSearchedNode prop ([#354](https://github.com/frontend-collective/react-sortable-tree/issues/354)) ([c4a41d1](https://github.com/frontend-collective/react-sortable-tree/commit/c4a41d16d5a5f9ab163cb7ba03f07d2462daca36))
* Added onlyExpandSearchedNodes prop ([2d57928](https://github.com/frontend-collective/react-sortable-tree/commit/2d579280229470eb42bd5501f0e32d58b40f2ecf)), closes [#245](https://github.com/frontend-collective/react-sortable-tree/issues/245)
* adding FUNDING.yml ([8e87804](https://github.com/frontend-collective/react-sortable-tree/commit/8e87804195fcc6cfc98ac0c8ae3a6f8511c05898))
* commonjs, es6, umd build supports ([#327](https://github.com/frontend-collective/react-sortable-tree/issues/327)) ([6556e4d](https://github.com/frontend-collective/react-sortable-tree/commit/6556e4d976a895837ca4ff03a36226fea3ee53f9))
* Display droppable placeholder element when tree is empty ([2cd371c](https://github.com/frontend-collective/react-sortable-tree/commit/2cd371c05e8ce8412e5e9f4fc34c9ed47f8a4f8c))
* enable the use of themes for simplified appearance customization ([d07c6a7](https://github.com/frontend-collective/react-sortable-tree/commit/d07c6a7797d1aa06aae5cf9b94adf99b7e9ba7a1))
* NEW DOCS + SITE ([#343](https://github.com/frontend-collective/react-sortable-tree/issues/343)) ([176b8c3](https://github.com/frontend-collective/react-sortable-tree/commit/176b8c3b00373efb8b0604605a64852dc4d4eee9))
* **node-renderer:** Make title and subtitle insertable via props ([fff72c6](https://github.com/frontend-collective/react-sortable-tree/commit/fff72c644ae51ffad3c3b3ebc2f62a8198d7ccf9))
* Only serve cjs and esm builds  ([#351](https://github.com/frontend-collective/react-sortable-tree/issues/351)) ([2c01832](https://github.com/frontend-collective/react-sortable-tree/commit/2c018328e218627483f5e4f59ebd56cd321325d6))
* Parent node in onMoveNode callback ([537c6a4](https://github.com/frontend-collective/react-sortable-tree/commit/537c6a4e8001019c5ab8d53d92934fad80b980bd))
* Provide more row parameters in rowHeight callback ([1b88b18](https://github.com/frontend-collective/react-sortable-tree/commit/1b88b1877145acc2849bca98c29385d27a97f405))
* remove current codesandbox website ([30749c7](https://github.com/frontend-collective/react-sortable-tree/commit/30749c74deba9b254c674bc0ded4fe2e6eb4cdce))
* row direction support ([#337](https://github.com/frontend-collective/react-sortable-tree/issues/337)) ([5bef44b](https://github.com/frontend-collective/react-sortable-tree/commit/5bef44b2b08a8ca8e65ad11fe8bfbc87c11ceadd))
* **tree-to-tree:** Enable tree-to-tree drag-and-drop ([6986a23](https://github.com/frontend-collective/react-sortable-tree/commit/6986a23cd7d654c2d963683f727661d9389fc1f5))
* update react-dnd ([#531](https://github.com/frontend-collective/react-sortable-tree/issues/531)) ([c449524](https://github.com/frontend-collective/react-sortable-tree/commit/c44952403e28b070a7bde087498198c9bb6ec433))


### Bug Fixes

* "Uncaught Invariant Violation: Expected to find a valid target." after cancelling a drag into the react sortable tree ([#740](https://github.com/frontend-collective/react-sortable-tree/issues/740)) ([52f0bcf](https://github.com/frontend-collective/react-sortable-tree/commit/52f0bcf51a80297ab63d5d1cfb0b32f4e3f0e702))
* accidentally deleted own styling ([c664ade](https://github.com/frontend-collective/react-sortable-tree/commit/c664adee1cc045a76a9f89c38b644aa996f38365))
* add correct headers to issue templates ([3c29cbf](https://github.com/frontend-collective/react-sortable-tree/commit/3c29cbff3edab714d62de577eb1b51f642bc94ec))
* add row variables to the callback at the top level ([a906f21](https://github.com/frontend-collective/react-sortable-tree/commit/a906f21da438d0f8d28df869c4ffa2e38293b28c))
* Allow children function in default renderer ([6f1dcac](https://github.com/frontend-collective/react-sortable-tree/commit/6f1dcac7337623a8296fa88424c744644ab0b998))
* Allow react@16 ([9a31a03](https://github.com/frontend-collective/react-sortable-tree/commit/9a31a038e5f4f7749fa70e391c843236ce68fdf4))
* Bundling patched version of react-dnd-scrollzone ([#432](https://github.com/frontend-collective/react-sortable-tree/issues/432)) ([4017a08](https://github.com/frontend-collective/react-sortable-tree/commit/4017a08cf902cf399ea843585347742e72f1e44a))
* correct link to react-virtualized props ([#349](https://github.com/frontend-collective/react-sortable-tree/issues/349)) ([46961ed](https://github.com/frontend-collective/react-sortable-tree/commit/46961ed30ab6ebd56283510d126a4762f9c53574))
* correct positioning of full-width draggable rows ([00396d1](https://github.com/frontend-collective/react-sortable-tree/commit/00396d1cb3a045ff053eca1720dc88a69c50aeef))
* deploy storybook to main site. fix links ([599f2ed](https://github.com/frontend-collective/react-sortable-tree/commit/599f2ed71a1497bb56857a8c6c44c23adbff7de0))
* don't prettify changelog ([8615412](https://github.com/frontend-collective/react-sortable-tree/commit/86154120b0814a72ad45b23b4a24f45f2bbac225))
* dragging past the bottom of the tree no longer slows down rendering ([3ce35f3](https://github.com/frontend-collective/react-sortable-tree/commit/3ce35f3f7b0c5c045e9a8e90b921b52362c005f7))
* expand tree for searches on initial mount. fixes [#223](https://github.com/frontend-collective/react-sortable-tree/issues/223) ([64a984a](https://github.com/frontend-collective/react-sortable-tree/commit/64a984aa8febb41166d391c4d4f59abee9066e19))
* External node offset was shifted ([d1ae0eb](https://github.com/frontend-collective/react-sortable-tree/commit/d1ae0ebefb146c1a6e2c8633658a0ce345a08311))
* External node offset was shifted ([7bfe115](https://github.com/frontend-collective/react-sortable-tree/commit/7bfe11545d4aba935f303aa221e07a95c51bc78d))
* Fix oblong collapse/expand button appearance on mobile safari ([62dfdec](https://github.com/frontend-collective/react-sortable-tree/commit/62dfdec2da1930ebd2f2443e703c37a75e7a67b5))
* Make `node` prop of wrapped external node explicitly required ([1eec414](https://github.com/frontend-collective/react-sortable-tree/commit/1eec4148306936cd7fef69f40d26ada0d89cf1b9))
* open collective link ([d55561e](https://github.com/frontend-collective/react-sortable-tree/commit/d55561e91b6abc7268be261c55c95a1fac5627e9))
* postinstall -> prepare ([#430](https://github.com/frontend-collective/react-sortable-tree/issues/430)) ([5f94ace](https://github.com/frontend-collective/react-sortable-tree/commit/5f94acea3a85793638047244c3c5de8667b06a3b))
* prettier ([#313](https://github.com/frontend-collective/react-sortable-tree/issues/313)) ([3456076](https://github.com/frontend-collective/react-sortable-tree/commit/34560763cb09564ec135f6fa33109c766d51fadf))
* prevent slowdown caused by invalid targetDepth when using maxDepth ([c21d4de](https://github.com/frontend-collective/react-sortable-tree/commit/c21d4de98aba9edbeee7f9678f32588c482ed5a5)), closes [#194](https://github.com/frontend-collective/react-sortable-tree/issues/194)
* propagate the expanded treeData to editor ([bd0df92](https://github.com/frontend-collective/react-sortable-tree/commit/bd0df921e1e35e5b2891a359043f85357f76a8f8))
* put style.css file in the correct place ([30dedbd](https://github.com/frontend-collective/react-sortable-tree/commit/30dedbdb69e4168a67a5b2da92d7398eab1165a8))
* Remove console.log left in after development ([da27c47](https://github.com/frontend-collective/react-sortable-tree/commit/da27c475bed92c1b3f77ee9a5cdfb4327dff6963))
* remove outdated links from readme ([7a07263](https://github.com/frontend-collective/react-sortable-tree/commit/7a07263719044709ea177cd7d59ed0c0d56e86d0))
* remove the extra s on style.css ([#342](https://github.com/frontend-collective/react-sortable-tree/issues/342)) ([77451bc](https://github.com/frontend-collective/react-sortable-tree/commit/77451bc65d70d2d279051662e81df90d1d60010d))
* rename parentNode callback param to nextParentNode ([24bf39d](https://github.com/frontend-collective/react-sortable-tree/commit/24bf39dda352a969a3514b93f4fd3ea74257cb7b))
* restore highlight line appearance ([2c95205](https://github.com/frontend-collective/react-sortable-tree/commit/2c95205af9d60a9fd0e898a5b39985bce9c823b7))
* rollup external dependencies ([7b8afd4](https://github.com/frontend-collective/react-sortable-tree/commit/7b8afd4aee6a950f5fbba0d1610dccfe6ffdaf21))
* scroll to search focused tree item ([#756](https://github.com/frontend-collective/react-sortable-tree/issues/756)) ([e528a4c](https://github.com/frontend-collective/react-sortable-tree/commit/e528a4c6167cf64a6c0ff43caf22be45cccb21e3))
* set themes using new api ([c2c1075](https://github.com/frontend-collective/react-sortable-tree/commit/c2c1075dfab844412f375174697ab30692b6055b))
* site ([95cb249](https://github.com/frontend-collective/react-sortable-tree/commit/95cb249e24fb8cab2134567f71447bd728228c1e))
* Specify version of react-dnd-html5-backend to avoid invalid package installs ([a09b611](https://github.com/frontend-collective/react-sortable-tree/commit/a09b6114cf4143849b7e462dc4a16cf72ea349ad))
* **tree-to-tree:** Fix node depth when dragging between trees ([323ccad](https://github.com/frontend-collective/react-sortable-tree/commit/323ccad8be9672757d562d70fc5bd2201bd7c84b))
* update links to new website ([d68c3bf](https://github.com/frontend-collective/react-sortable-tree/commit/d68c3bfb1cf5b36fa55453b089961417f39d745e))
* update props link + added PRs welcome badge ([c83c2aa](https://github.com/frontend-collective/react-sortable-tree/commit/c83c2aae14d7d2e6c884da314b34a068bd4d9109))
* update screenshot tests ([4977cb1](https://github.com/frontend-collective/react-sortable-tree/commit/4977cb1d6595ce588ef912604d21e1503330c3af))
* Using DragDropContextConsumer directly ([#466](https://github.com/frontend-collective/react-sortable-tree/issues/466)) ([7bc9995](https://github.com/frontend-collective/react-sortable-tree/commit/7bc9995fd2eb437debbc9d65dba926dd62e1e1d7))
* website imports ([8e7f83d](https://github.com/frontend-collective/react-sortable-tree/commit/8e7f83dc483c4697edd5ae29080316cf68de248a))
* website pt 2 ([6914959](https://github.com/frontend-collective/react-sortable-tree/commit/69149596c884cb28c83c17f238c7d7d186271c44))


* get rid of `dndWrapExternalSource` api ([d103e9f](https://github.com/frontend-collective/react-sortable-tree/commit/d103e9f47da81dff5b37e8daa0c3c35773380da4))
* Merge branch 'brendanmoore-feature/remove-style-loader' ([16f7740](https://github.com/frontend-collective/react-sortable-tree/commit/16f774005cda8420f38038672bc3d3576de3bd16))

## [2.8.0](https://github.com/frontend-collective/react-sortable-tree/compare/v2.7.1...v2.8.0) (2020-08-10)


### Features

* adding FUNDING.yml ([8e87804](https://github.com/frontend-collective/react-sortable-tree/commit/8e87804195fcc6cfc98ac0c8ae3a6f8511c05898))
* remove current codesandbox website ([30749c7](https://github.com/frontend-collective/react-sortable-tree/commit/30749c74deba9b254c674bc0ded4fe2e6eb4cdce))


### Bug Fixes

* accidentally deleted own styling ([c664ade](https://github.com/frontend-collective/react-sortable-tree/commit/c664adee1cc045a76a9f89c38b644aa996f38365))
* don't prettify changelog ([8615412](https://github.com/frontend-collective/react-sortable-tree/commit/86154120b0814a72ad45b23b4a24f45f2bbac225))
* open collective link ([d55561e](https://github.com/frontend-collective/react-sortable-tree/commit/d55561e91b6abc7268be261c55c95a1fac5627e9))
* remove outdated links from readme ([7a07263](https://github.com/frontend-collective/react-sortable-tree/commit/7a07263719044709ea177cd7d59ed0c0d56e86d0))
* scroll to search focused tree item ([#756](https://github.com/frontend-collective/react-sortable-tree/issues/756)) ([e528a4c](https://github.com/frontend-collective/react-sortable-tree/commit/e528a4c6167cf64a6c0ff43caf22be45cccb21e3))
* set themes using new api ([c2c1075](https://github.com/frontend-collective/react-sortable-tree/commit/c2c1075dfab844412f375174697ab30692b6055b))
* site ([95cb249](https://github.com/frontend-collective/react-sortable-tree/commit/95cb249e24fb8cab2134567f71447bd728228c1e))
* website imports ([8e7f83d](https://github.com/frontend-collective/react-sortable-tree/commit/8e7f83dc483c4697edd5ae29080316cf68de248a))
* website pt 2 ([6914959](https://github.com/frontend-collective/react-sortable-tree/commit/69149596c884cb28c83c17f238c7d7d186271c44))

<a name="2.7.1"></a>
## [2.7.1](https://github.com/frontend-collective/react-sortable-tree/compare/v2.7.0...v2.7.1) (2019-11-12)



<a name="2.7.0"></a>
# [2.7.0](https://github.com/frontend-collective/react-sortable-tree/compare/v2.6.2...v2.7.0) (2019-10-14)


### Features

* update react-dnd ([#531](https://github.com/frontend-collective/react-sortable-tree/issues/531)) ([c449524](https://github.com/frontend-collective/react-sortable-tree/commit/c449524))



<a name="2.6.2"></a>
## [2.6.2](https://github.com/frontend-collective/react-sortable-tree/compare/v2.6.1...v2.6.2) (2019-03-21)


### Bug Fixes

* Using DragDropContextConsumer directly ([#466](https://github.com/frontend-collective/react-sortable-tree/issues/466)) ([7bc9995](https://github.com/frontend-collective/react-sortable-tree/commit/7bc9995))



<a name="2.6.1"></a>
## [2.6.1](https://github.com/frontend-collective/react-sortable-tree/compare/v2.6.0...v2.6.1) (2019-03-19)



<a name="2.6.0"></a>
# [2.6.0](https://github.com/frontend-collective/react-sortable-tree/compare/v2.5.0...v2.6.0) (2018-12-11)


### Bug Fixes

* Bundling patched version of react-dnd-scrollzone ([#432](https://github.com/frontend-collective/react-sortable-tree/issues/432)) ([4017a08](https://github.com/frontend-collective/react-sortable-tree/commit/4017a08))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/frontend-collective/react-sortable-tree/compare/v2.4.0...v2.5.0) (2018-12-10)


### Bug Fixes

* postinstall -> prepare ([#430](https://github.com/frontend-collective/react-sortable-tree/issues/430)) ([5f94ace](https://github.com/frontend-collective/react-sortable-tree/commit/5f94ace))
* rollup external dependencies ([7b8afd4](https://github.com/frontend-collective/react-sortable-tree/commit/7b8afd4))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/frontend-collective/react-sortable-tree/compare/v2.3.0...v2.4.0) (2018-12-10)



<a name="2.3.0"></a>
# [2.3.0](https://github.com/frontend-collective/react-sortable-tree/compare/v2.2.0...v2.3.0) (2018-10-23)


### Bug Fixes

* deploy storybook to main site. fix links ([599f2ed](https://github.com/frontend-collective/react-sortable-tree/commit/599f2ed))
* propagate the expanded treeData to editor ([bd0df92](https://github.com/frontend-collective/react-sortable-tree/commit/bd0df92))
* update links to new website ([d68c3bf](https://github.com/frontend-collective/react-sortable-tree/commit/d68c3bf))
* update props link + added PRs welcome badge ([c83c2aa](https://github.com/frontend-collective/react-sortable-tree/commit/c83c2aa))
* update screenshot tests ([4977cb1](https://github.com/frontend-collective/react-sortable-tree/commit/4977cb1))


### Features

* add storybook for onlyExpandSearchedNode prop ([#354](https://github.com/frontend-collective/react-sortable-tree/issues/354)) ([c4a41d1](https://github.com/frontend-collective/react-sortable-tree/commit/c4a41d1))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/frontend-collective/react-sortable-tree/compare/v2.1.2...v2.2.0) (2018-06-12)


### Bug Fixes

* correct link to react-virtualized props ([#349](https://github.com/frontend-collective/react-sortable-tree/issues/349)) ([46961ed](https://github.com/frontend-collective/react-sortable-tree/commit/46961ed))
* remove the extra s on style.css ([#342](https://github.com/frontend-collective/react-sortable-tree/issues/342)) ([77451bc](https://github.com/frontend-collective/react-sortable-tree/commit/77451bc))


### Features

* commonjs, es6, umd build supports ([#327](https://github.com/frontend-collective/react-sortable-tree/issues/327)) ([6556e4d](https://github.com/frontend-collective/react-sortable-tree/commit/6556e4d))
* NEW DOCS + SITE ([#343](https://github.com/frontend-collective/react-sortable-tree/issues/343)) ([176b8c3](https://github.com/frontend-collective/react-sortable-tree/commit/176b8c3))
* Only serve cjs and esm builds  ([#351](https://github.com/frontend-collective/react-sortable-tree/issues/351)) ([2c01832](https://github.com/frontend-collective/react-sortable-tree/commit/2c01832))
* row direction support ([#337](https://github.com/frontend-collective/react-sortable-tree/issues/337)) ([5bef44b](https://github.com/frontend-collective/react-sortable-tree/commit/5bef44b))



<a name="2.1.2"></a>
## [2.1.2](https://github.com/frontend-collective/react-sortable-tree/compare/v2.1.1...v2.1.2) (2018-05-23)


### Bug Fixes

* prettier ([#313](https://github.com/frontend-collective/react-sortable-tree/issues/313)) ([3456076](https://github.com/frontend-collective/react-sortable-tree/commit/3456076))



<a name="2.1.1"></a>

## [2.1.1](https://github.com/frontend-collective/react-sortable-tree/compare/v2.1.0...v2.1.1) (2018-04-29)

<a name="2.1.0"></a>

# [2.1.0](https://github.com/frontend-collective/react-sortable-tree/compare/v2.0.1...v2.1.0) (2018-03-04)

### Features

* Added onlyExpandSearchedNodes prop ([2d57928](https://github.com/frontend-collective/react-sortable-tree/commit/2d57928)), closes [#245](https://github.com/frontend-collective/react-sortable-tree/issues/245)

<a name="2.0.1"></a>

## [2.0.1](https://github.com/frontend-collective/react-sortable-tree/compare/v2.0.0...v2.0.1) (2018-02-10)

### Bug Fixes

* restore highlight line appearance ([2c95205](https://github.com/frontend-collective/react-sortable-tree/commit/2c95205))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.8.1...v2.0.0) (2018-02-10)

### BREAKING CHANGES

* from v2.0.0 on, you must import the css for the
  component yourself, using `import 'react-sortable-tree/style.css';`.
  You only need to do this once in your application.

* Support dropped for IE versions earlier than IE 11

<a name="1.8.1"></a>

## [1.8.1](https://github.com/frontend-collective/react-sortable-tree/compare/v1.8.0...v1.8.1) (2018-01-21)

### Bug Fixes

* rename parentNode callback param to nextParentNode ([24bf39d](https://github.com/frontend-collective/react-sortable-tree/commit/24bf39d))

<a name="1.8.0"></a>

# [1.8.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.7.0...v1.8.0) (2018-01-21)

### Features

* Parent node in onMoveNode callback ([537c6a4](https://github.com/frontend-collective/react-sortable-tree/commit/537c6a4))

<a name="1.7.0"></a>

# [1.7.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.6.0...v1.7.0) (2018-01-16)

### Features

* add onDragStateChanged callback ([2caa9d1](https://github.com/frontend-collective/react-sortable-tree/commit/2caa9d1))

  onDragStateChanged is called when dragging begins and ends, so you can easily track the current state of dragging.<br />
  Thanks to [@wuweiweiwu](https://github.com/wuweiweiwu) for the contribution!

<a name="1.6.0"></a>

# [1.6.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.5.5...v1.6.0) (2018-01-14)

### Features

* add more parameters to rowHeight. Fixes [#199](https://github.com/frontend-collective/react-sortable-tree/issues/199) ([8ff0ff2](https://github.com/frontend-collective/react-sortable-tree/commit/8ff0ff2))

  Thanks to [@wuweiweiwu](https://github.com/wuweiweiwu) for the contribution!

<a name="1.5.5"></a>

## [1.5.5](https://github.com/frontend-collective/react-sortable-tree/compare/v1.5.4...v1.5.5) (2018-01-13)

### Bug Fixes

* expand tree for searches on initial mount. fixes [#223](https://github.com/frontend-collective/react-sortable-tree/issues/223) ([64a984a](https://github.com/frontend-collective/react-sortable-tree/commit/64a984a))

<a name="1.5.4"></a>

## [1.5.4](https://github.com/frontend-collective/react-sortable-tree/compare/v1.5.3...v1.5.4) (2018-01-07)

### Bug Fixes

* UglifyJS enabled to remove dead code, which had been causing issues with some builds. If the presence of UglifyJS causes issues in your production builds, please refer to https://github.com/frontend-collective/react-sortable-tree#if-it-throws-typeerror-fn-is-not-a-function-errors-in-production

<a name="1.5.3"></a>

## [1.5.3](https://github.com/frontend-collective/react-sortable-tree/compare/v1.5.2...v1.5.3) (2017-12-09)

### Bug Fixes

* dragging past the bottom of the tree no longer slows down rendering ([3ce35f3](https://github.com/frontend-collective/react-sortable-tree/commit/3ce35f3))

<a name="1.5.2"></a>

## [1.5.2](https://github.com/frontend-collective/react-sortable-tree/compare/v1.5.1...v1.5.2) (2017-11-28)

### Bug Fixes

* correct positioning of full-width draggable rows ([00396d1](https://github.com/frontend-collective/react-sortable-tree/commit/00396d1))

<a name="1.5.1"></a>

## [1.5.1](https://github.com/frontend-collective/react-sortable-tree/compare/v1.5.0...v1.5.1) (2017-11-28)

### Bug Fixes

* prevent slowdown caused by invalid targetDepth when using maxDepth ([c21d4de](https://github.com/frontend-collective/react-sortable-tree/commit/c21d4de)), closes [#194](https://github.com/frontend-collective/react-sortable-tree/issues/194)

<a name="1.5.0"></a>

# [1.5.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.4.0...v1.5.0) (2017-10-29)

### Bug Fixes

* Fix oblong collapse/expand button appearance on mobile safari ([62dfdec](https://github.com/frontend-collective/react-sortable-tree/commit/62dfdec))

### Features

* enable the use of themes for simplified appearance customization ([d07c6a7](https://github.com/frontend-collective/react-sortable-tree/commit/d07c6a7))

<a name="1.4.0"></a>

# [1.4.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.3.1...v1.4.0) (2017-10-13)

### Features

* Add path argument to onVisibilityToggle callback ([25cd134](https://github.com/frontend-collective/react-sortable-tree/commit/25cd134))

<a name="1.3.1"></a>

## [1.3.1](https://github.com/frontend-collective/react-sortable-tree/compare/v1.3.0...v1.3.1) (2017-10-03)

### Bug Fixes

* Allow react[@16](https://github.com/16) ([9a31a03](https://github.com/frontend-collective/react-sortable-tree/commit/9a31a03))

<a name="1.3.0"></a>

# [1.3.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.2.2...v1.3.0) (2017-09-20)

### Features

* Provide more row parameters in rowHeight callback ([1b88b18](https://github.com/frontend-collective/react-sortable-tree/commit/1b88b18))

<a name="1.2.2"></a>

## [1.2.2](https://github.com/frontend-collective/react-sortable-tree/compare/v1.2.1...v1.2.2) (2017-09-12)

### Bug Fixes

* Specify version of react-dnd-html5-backend to avoid invalid package installs ([a09b611](https://github.com/frontend-collective/react-sortable-tree/commit/a09b611))

<a name="1.2.1"></a>

## [1.2.1](https://github.com/frontend-collective/react-sortable-tree/compare/v1.2.0...v1.2.1) (2017-09-06)

### Bug Fixes

* Allow children function in default renderer ([6f1dcac](https://github.com/frontend-collective/react-sortable-tree/commit/6f1dcac))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.1.1...v1.2.0) (2017-08-12)

### Features

* Add `shouldCopyOnOutsideDrop` prop to enable copying of nodes that leave the tree ([d6a9be9](https://github.com/frontend-collective/react-sortable-tree/commit/d6a9be9))

<a name="1.1.1"></a>

## [1.1.1](https://github.com/frontend-collective/react-sortable-tree/compare/v1.1.0...v1.1.1) (2017-08-06)

### Bug Fixes

* **tree-to-tree:** Fix node depth when dragging between trees ([323ccad](https://github.com/frontend-collective/react-sortable-tree/commit/323ccad))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/frontend-collective/react-sortable-tree/compare/v1.0.0...v1.1.0) (2017-08-05)

### Features

* **node-renderer:** Make title and subtitle insertable via props ([fff72c6](https://github.com/frontend-collective/react-sortable-tree/commit/fff72c6))

<a name="1.0.0"></a>

# [1.0.0](https://github.com/frontend-collective/react-sortable-tree/compare/v0.1.21...v1.0.0) (2017-08-05)

### Bug Fixes

* External node offset was shifted ([d1ae0eb](https://github.com/frontend-collective/react-sortable-tree/commit/d1ae0eb))

### Code Refactoring

* get rid of `dndWrapExternalSource` api ([d103e9f](https://github.com/frontend-collective/react-sortable-tree/commit/d103e9f))

### Features

* **tree-to-tree:** Enable tree-to-tree drag-and-drop ([6986a23](https://github.com/frontend-collective/react-sortable-tree/commit/6986a23))
* Display droppable placeholder element when tree is empty ([2cd371c](https://github.com/frontend-collective/react-sortable-tree/commit/2cd371c))
* Add `prevPath` and `prevTreeIndex` to the `onMoveNode` callback ([6986a23](https://github.com/frontend-collective/react-sortable-tree/commit/6986a23))

### BREAKING CHANGES

* Trees that are empty now display a placeholder element
  in their place instead of being simply empty.
* `dndWrapExternalSource` api no longer exists.
  You can achieve the same functionality and more with react-dnd
  APIs, as demonstrated in the storybook example.

<a name="0.1.21"></a>

## [0.1.21](https://github.com/frontend-collective/react-sortable-tree/compare/v0.1.20...v0.1.21) (2017-07-15)

### Bug Fixes

* Remove console.log left in after development ([da27c47](https://github.com/frontend-collective/react-sortable-tree/commit/da27c47))

See the GitHub [Releases](https://github.com/frontend-collective/react-sortable-tree/releases) for information on updates.
