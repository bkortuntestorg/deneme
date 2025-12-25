// GitHub Secret Scanning tarafından yakalanacak örnek kodlar

// 1. AWS Erişim Anahtarları (En yaygın yakalananlardan biri)
const aws_config = {
    accessKeyId: "AKIAIMNO789ABCDEF012", // AWS_ACCESS_KEY_ID formatı
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
};

// 2. GitHub Kişisel Erişim Jetonu (Classic PAT)
const github_token = "ghp_n7V8kL90abcDEFghIJKLmnoPQRstuv012345";

// 3. Google API Anahtarı
const google_maps_api = "AIzaSyB-4L6abc789dEfGhiJklmNoPqRsTuVwXyZ";

// 4. Stripe Canlı/Test API Anahtarı
const stripe_key = "sk_live_51MabcDEFghiJKLmnoPQRstuvWXYZ0123456789";

// 5. Slack Webhook URL (İçerisinde jeton barındırır)
const slack_webhook = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX";

// 6. Generic Parola veya Bağlantı Dizisi
const db_connection = "mongodb+srv://admin:P@ssw0rd123!@cluster0.example.mongodb.net/mydb";

export { aws_config, github_token, google_maps_api };
