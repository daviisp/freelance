import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { z } from "zod";

const messageSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export const MessageController = {
  index: async (request: Request, response: Response) => {
    try {
      const messages = await prisma.messagesUsers.findMany();
      return response.status(200).json({ data: messages });
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ message: err.message });
      }
    }
  },

  save: async (request: Request, response: Response) => {
    const { name, email, subject, message } = messageSchema.parse(request.body);

    try {
      await prisma.messagesUsers.create({
        data: {
          name,
          email,
          subject,
          message,
        },
      });

      return response
        .status(200)
        .json({ message: "Message send successfully!" });
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ message: err.message });
      }
    }
  },
};
