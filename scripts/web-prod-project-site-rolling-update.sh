PROD_CLUSTER="gke_bjak-nft_asia-southeast1_nft-prod-cluster"
kubectl set image deployment/nft-web-project-site-deployment nft-web-project-site=asia.gcr.io/bjak-nft/nft-web-project-site:$1 -n prod --cluster=${PROD_CLUSTER}
