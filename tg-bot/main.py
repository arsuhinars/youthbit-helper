import os
import asyncio

from telebot.types import Message
from telebot.async_telebot import AsyncTeleBot

API_TOKEN = os.environ['TELEGRAM_API_TOKEN']

bot = AsyncTeleBot(API_TOKEN)


@bot.message_handler(commands=['start'])
async def handle_start(message: Message):
    ...


async def main():
    await asyncio.wait([
        bot.polling()
    ])


asyncio.run(main)
