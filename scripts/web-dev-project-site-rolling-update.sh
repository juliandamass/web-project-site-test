DEV_CLUSTER="gke_bjak-nft_asia-southeast2-a_nft-dev-cluster"
kubectl set image deployment/nft-web-project-site-deployment nft-web-project-site=asia.gcr.io/bjak-nft/nft-web-project-site:$1 -n dev --cluster=${DEV_CLUSTER}

