import LoginClient from "@/Components/Login/LoginClient";

export const metadata = {
  title:
    "Login - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  robots: {
    index: false, // noindex
    follow: false, // nofollow
  },
};

export default function LoginPage() {
  return (
    <>
      <LoginClient />
    </>
  );
}
