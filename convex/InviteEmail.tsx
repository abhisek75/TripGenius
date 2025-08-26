import {
  Html,
  Preview,
  Tailwind,
  Body,
  Head,
  Container,
  Section,
  Img,
  Text,
  Button,
  Link,
  Hr,
} from "@react-email/components";
import React from "react";

const InviteEmail = ({ inviteLink, projectName }: { inviteLink: string; projectName: string }) => {
  const previewText = `You're invited to collaborate on ${projectName} with Travel Genius!`;

  const BASE_URL = process.env.HOSTING_URL ?? "https://tripgenius.ai";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-auto mx-auto font-sans">
          <Container className="bg-white border border-solid border-gray-300 rounded-lg shadow-lg my-[80px] mx-auto p-[24px] w-[90%] max-w-[500px]">
            {/* Logo Section */}
            <Section className="mt-[24px] text-center">
              <Img
                src={`${BASE_URL}/tripgenius-logo.png`}
                alt="Trip Genius Logo"
                width={160}
                height={48}
                className="mx-auto"
              />
            </Section>

            {/* Invitation Message */}
            <Section className="text-center mt-[24px] mb-[24px]">
              <Text className="text-gray-900 font-semibold text-[16px] leading-[24px]">
                ✨ You’ve been invited to collaborate on <b>{projectName}</b> in Trip Genius
              </Text>
              <Text className="text-gray-700 text-[14px] leading-[22px]">
                Plan amazing trips together, explore new destinations, and make unforgettable memories.
              </Text>

              {/* CTA Button */}
              <Button
                className="bg-blue-600 hover:bg-blue-700 transition-all rounded text-white 
                           text-[14px] font-bold no-underline text-center px-6 py-3 mt-4 inline-block"
                href={inviteLink}
              >
                Join the Plan 🚀
              </Button>

              <Text className="text-gray-600 text-[12px] mt-4 leading-[20px]">
                If you received this invite by mistake, feel free to ignore it.
              </Text>

              <Text className="text-gray-800 font-medium text-[14px] leading-[24px] mt-3">
                Want to explore more?
                <Link href={BASE_URL} target="_blank" className="text-blue-500 underline ml-1">
                  Visit Trip Genius.
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="border border-solid border-gray-300 my-[24px] mx-0 w-full" />
            <Text className="text-gray-500 text-[12px] text-center">
              © 2024 Trip Genius. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default InviteEmail;
