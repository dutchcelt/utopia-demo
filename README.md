# Basic Style Dictionary + Utopia Core Transform

This example is based on the bare-bones [Style Dictionary basic init](https://amzn.github.io/style-dictionary/#/quick_start?id=creating-a-new-project). It also include Utopia Core to demo using it as a Style Dictionary Transform. Clone this repository and from its directory to install and run it and see the output of the transform.

## Install

```bash
npm install
```

### Example 'extensions'

We can add some clamped font-sizes using an [Utopia Core](https://github.com/trys/utopia-core) configuration. The [`font.json`](tokens/size/font.json) already as a [W3C Design Token `$extensions`](https://design-tokens.github.io/community-group/format/#extensions) example:

```json
"medium": {
	"value": "1",
	"comment": "the medium size of the font",
	"$extensions": {
		"utopia.calculate.clamp": {
			"minWidth": "420",
			"maxWidth": "1280",
			"minSize": "16",
			"maxSize": "18"
		}
	}
},
```

## Build

```bash
npm run build
```

You should see something like this output:

```css
✔︎  build/scss/_variables.css
```
