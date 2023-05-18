const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_SECRETE,
  REFRESH_TOKEN_SECRETE,
} = require("../config/index");
const RefreshToken = require("../models/token");

class JWTService {
  // sign access token
  static signAccessToken(payload, expiryTime) {
    return jwt.sign(payload, ACCESS_TOKEN_SECRETE, { expiresIn: expiryTime });
  }

  // sign refresh token
  static signRefreshToken(payload, expiryTime) {
    return jwt.sign(payload, REFRESH_TOKEN_SECRETE, { expiresIn: expiryTime });
  }

  // verify access token
  static verifyAccessToken(token) {
    return jwt.verify(token, ACCESS_TOKEN_SECRETE);
  }

  // verify refresh token
  static verifyRefreshToken(token) {
    return jwt.verify(token, REFRESH_TOKEN_SECRETE);
  }

  // store refresh token
  static async storeRefreshToken(token, userId) {
    try {
      const newToken = new RefreshToken({
        token: token,
        userId: userId,
      });

      // store in db
      await newToken.save();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = JWTService;
