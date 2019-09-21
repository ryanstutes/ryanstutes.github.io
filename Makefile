# Serve locally via pyhon 3
.PHONY: serve
serve:
	python3 -m http.server --cgi 8080
