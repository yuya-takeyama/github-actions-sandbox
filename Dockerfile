FROM busybox

LABEL org.opencontainers.image.source https://github.com/yuya-takeyama/github-actions-sandbox

RUN echo "This is a sandbox" > sandbox.txt
