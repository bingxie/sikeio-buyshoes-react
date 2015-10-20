.PHONY: css
css:
	mkdir -p bundle
	node_modules/postcss-cli/bin/postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	node_modules/.bin/browser-sync start --server --files='index.html,bundle/app.css,js/app.js'


.PHONY: clean
clean:
	rm -r bundle
