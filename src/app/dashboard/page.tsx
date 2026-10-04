import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { DashboardContent } from "@/components/DashboardContent";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-up");
  }

  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-up");
  }

  const primaryEmail = clerkUser.emailAddresses.find(
    (email) => email.id === clerkUser.primaryEmailAddressId
  )?.emailAddress;

  if (!primaryEmail) {
    redirect("/sign-up");
  }

  const user = await prisma.user.upsert({
    where: {
      clerkUserId: userId,
    },
    update: {
      email: primaryEmail,
    },
    create: {
      clerkUserId: userId,
      email: primaryEmail,
    },
  });

  return (
    <DashboardContent
      email={user.email}
      createdAt={user.createdAt.toISOString()}
    />
  );
}