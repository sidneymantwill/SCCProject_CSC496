#!/bin/bash

set -x

sudo apt-get update && apt-get install -y apt-transport-https curl
sudo curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
sudo touch /etc/apt-sources.list.d/kubernetes.list
sudo echo  "deb https://apt.kubernetes.io/ kubernetes-bionic main" >> /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
