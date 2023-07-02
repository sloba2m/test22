export default function handler(req, res) {
  console.log(req.body);
  res.send(200);
}

const { SuperfaceClient } = require("@superfaceai/one-sdk");

// You can manage tokens here: https://superface.ai/insights
const sdk = new SuperfaceClient({
  sdkAuthToken:
    "sfs_f7b687120c1d97be9d88c984b4aa5115dfb3b634bc0c7b92aab044eacf520268c3c70a9361bd4e7d29ad8d81ae2161d55b82cc39852e4536eec64c794f4b19c5_64cf7ab3",
});

async function run() {
  // Load the profile
  const profile = await sdk.getProfile("communication/send-email@2.2.0");

  // Use the profile
  const result = await profile.getUseCase("SendEmail").perform(
    {
      from: "no-reply@example.com",
      to: "jane.doe@example.com",
      subject: "Your order has been shipped!",
      text: "Hello Jane, your recent order on Our Shop has been shipped.",
      attachments: [
        {
          filename: "order.pdf",
          type: "application/pdf",
          content: "JVBERi0xLjQKJeLjz9MKMyAwIG9...",
        },
      ],
    },
    {
      provider: "sendgrid",
      security: {
        bearer_token: {
          token:
            "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",
        },
      },
    }
  );

  // Handle the result
  try {
    const data = result.unwrap();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

run();
