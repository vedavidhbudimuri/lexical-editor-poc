#!/bin/sh


if [[  "$CI_BRANCH" == "alpha" ]]; then
  export S3_BUCKET=""
  export BUILD_ENVIRONMENT="alpha"
  echo "Exported $S3_BUCKET $BUILD_ENVIRONMENT"
elif [[  "$CI_BRANCH" == "beta" ]]; then
  export S3_BUCKET=""
  export BUILD_ENVIRONMENT="beta"
  echo "Exported $S3_BUCKET $BUILD_ENVIRONMENT"
elif [[  "$CI_BRANCH" == "gamma" ]]; then
  export S3_BUCKET=""
  export BUILD_ENVIRONMENT="gamma"
  echo "Exported $S3_BUCKET $BUILD_ENVIRONMENT"
elif [[  "$CI_BRANCH" == "prod" ]]; then
  export S3_BUCKET=""
  export BUILD_ENVIRONMENT="prod"
  echo "Exported $S3_BUCKET $BUILD_ENVIRONMENT"
fi

export CI=false
