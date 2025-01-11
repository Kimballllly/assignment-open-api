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
          Host: this.apiHost,
        },
      });

      const rawData = response.data.userInfo;
      const formattedResponse = this.formatUserInfo(rawData);

      return formattedResponse;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching user info',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private formatUserInfo(data: any) {
    const user = data.user;
    const stats = data.stats;

    return {
      username: user.uniqueId,
      name: user.nickname,
      verified: user.verified,
      bio: user.signature,
      website: user.bioLink?.link || 'Not available',
      region: user.region,
      language: user.language,
      profilePicture: user.avatarLarger,
      stats: {
        followers: stats.followerCount,
        videos: stats.videoCount,
        likes: stats.heart,
      },
      highlights: [
        user.signature || "No bio available.",
        "Check out the account for fun and engaging content!",
      ],
    };
  }

  async getUserFollowings(secUid: string, count = 50, minCursor = 0, maxCursor = 0) {
    try {
      const response = await axios.get(`${this.apiUrl}/api/user/followings`, {
        params: { secUid, count, minCursor, maxCursor },
        headers: {
          'X-Rapidapi-Key': this.apiKey,
          'X-Rapidapi-Host': this.apiHost,
        },
      });
  
      // Transform the response into a custom design
      const customizedResponse = {
        requestDetails: {
          secUid,
          count,
          minCursor,
          maxCursor,
        },
        metadata: {
          totalFollowings: response.data.total || 0,
          hasMore: response.data.hasMore || false,
          maxCursor: response.data.maxCursor,
          minCursor: response.data.minCursor,
          logId: response.data.extra?.logid || '',
        },
        followings: response.data.userList.map((user: any) => ({
          username: user.user.uniqueId,
          nickname: user.user.nickname,
          avatar: user.user.avatarThumb,
          verified: user.user.verified,
          bio: user.user.signature,
          stats: {
            followers: user.stats.followerCount,
            followings: user.stats.followingCount,
            likes: user.stats.heartCount,
            videos: user.stats.videoCount,
          },
        })),
      };
  
      return customizedResponse;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching user followings',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  
}
