set -x
sudo docker build -t nodetest
sudo docker run --rm -it -p 8080:8080 nodetest