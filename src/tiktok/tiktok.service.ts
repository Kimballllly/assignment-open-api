import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TiktokService {
  private readonly apiUrl = 'https://tiktok-api23.p.rapidapi.com';
  private readonly apiKey = 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026';
  private readonly apiHost = 'tiktok-api23.p.rapidapi.com';

  async getUserInfo(uniqueId: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/api/user/info`, {
        params: { uniqueId },
        headers: {
          'X-Rapidapi-Key': this.apiKey,
          'X-Rapidapi-Host': this.apiHost,
          'Host': this.apiHost,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching user info',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
