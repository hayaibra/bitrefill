import { Accordion, Stack, Title } from '@mantine/core';
import React from 'react';
import Details from '../details/Details';
import QuestionItem from './QuestionItem';

const questions = [
  {
    value: 'one',
    title: 'Can I buy gift cards with Bitcoin or Crypto?',
    text: 'Yes, you can buy gift cards with Bitcoin or Crypto. You can cash out your crypto to purchase over 5,000+ gift cards from a variety of retailers, including Amazon, Apple, Walmart, Steam, Google Play etc.',
  },
  {
    value: 'two',
    title: 'What gift card brands can I purchase with Crypto?',
    text: 'You can shop gift cards for a variety of brands with cryptocurrency. Some of the most popular brands include Amazon, Starbucks, Walmart, Apple, Netflix, Airbnb, Uber, eBay, Roblox, Spotify, Free Fire etc.',
  },
  {
    value: 'three',
    title: 'What cryptocurrencies can I use to shop gift cards?',
    text: 'At Bitrefill, you can purchase gift cards using a variety of cryptocurrencies including Bitcoin, Lightning, Ethereum, USDC, USDT, Binance Pay, Litecoin, Dogecoin or Dash.',
  },
  {
    value: 'four',
    title: 'What crypto wallets/exchanges can I use to buy gift cards?',
    text: 'You can use several different wallets and exchanges to buy gift cards at Bitrefill. Some of the most popular options include Binance Pay, Coinbase, Kraken, Trust Wallet, Bitfinex, Blockchain, KuCoin, Ledger, Strike, Bitstamp etc.',
  },
  {
    value: 'five',
    title: 'How does the Crypto payment work?',
    text: 'The process of buying with cryptocurrency is simple and relatively straightforward.',
    list: [
      'First of all you need to pick your gift card along with the desired value.',
      'Once done, the next step would be to fill all the required fields in order to proceed with the payment method.',
      "Then, you'll be asked to choose your preferred cryptocurrency and send the corresponding amount to the provided cryptocurrency address or scan the QR code using your mobile wallet.",
      "Once, the payment is done we'll proceed with the order further and the digital gift card code should arrive within a few moments.",
    ],
  },
  {
    value: 'six',
    title: 'How quickly will my gift card arrive after I order it?',
    text: 'If you order a gift card from our website, your digital gift card should arrive almost instantaneously after you order it. All gift cards are delivered via email too, so as soon as your order is processed, the gift card will be sent to the email address you provided.',
  },
  {
    value: 'seven',
    title: 'I paid for the gift card but didn’t get it. What should I do now?',
    text: "We're sorry to hear that you didn't receive your gift card. Please reach out to our customer support team at our help center and they will be more than happy to help you out.",
  },
  {
    value: 'eight',
    title: 'I have a question not answered here. How can I get help?',
    text: "If you have a question that's not answered here you can visit our help center and we'll be happy to assist you.",
  },
];

const Questions = () => {
  return (
    <Stack spacing="xl">
      <Title
        color="white"
        sx={(theme) => ({
          fontSize: '40px',
          [theme.fn.smallerThan('sm')]: {
            fontSize: '25px',
          },
        })}
        fw={600}
      >
        Frequently asked questions
      </Title>
      <Accordion>
        {questions.map((question, i) => (
          <QuestionItem key={i} question={question} />
        ))}
      </Accordion>
    </Stack>
  );
};

export default Questions;
