export default {
    s3: {
      REGION: "us-east-2",
      BUCKET: "yxy-demo-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://95ej56d2pg.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_IGqy1TPui",
      APP_CLIENT_ID: "7d2nthvclm8eva7bf217a9fm81",
      IDENTITY_POOL_ID: "us-east-2:0b301fca-b4e2-454f-a0d9-b47c35ab6ee1"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_KXjxOOoRECc5p251UYT0Vfbe00byICxzbx"
  };