set -x
git clone https://github.com/sidneymantwill/SCCProject_CSC496.git
cd SCCProject_CSC496
sudo docker build -t nodetest
sudo docker run --rm -it -p 8080:8080 nodetest
