import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'default_secret'

export const generateToken = (payload: object, expiresIn = '1h') =>
  jwt.sign(payload, secret, { expiresIn })

export const verifyToken = (token: string) =>
  jwt.verify(token, secret)
