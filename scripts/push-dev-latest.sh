USER_NAME=$(git config user.name)

if [ -z "$USER_NAME" ]; then
  echo "Push Failed. Please sign in your git account"
    exit 1
fi

set -e
yarn run docker-build
COMMIT_HASH_TAG="$(git log -1 --pretty=%h)"

# Valid format for Docker image tags
COMMIT_TAG="${USER_NAME}-${COMMIT_HASH_TAG}"

echo "Tagging with ${COMMIT_TAG}"

docker tag nft-web-project-site asia.gcr.io/bjak-nft/nft-web-project-site:latest
docker push asia.gcr.io/bjak-nft/nft-web-project-site:latest
# These tag the docker image then push it to GCP's container registry
# Tag with last 7 characters in git commit hash tag
docker tag nft-web-project-site asia.gcr.io/bjak-nft/nft-web-project-site:"${COMMIT_TAG}" 
docker push asia.gcr.io/bjak-nft/nft-web-project-site:"${COMMIT_TAG}"

echo -e "\033[1;33m\033[1mTagged with ${COMMIT_TAG}\033[0m"