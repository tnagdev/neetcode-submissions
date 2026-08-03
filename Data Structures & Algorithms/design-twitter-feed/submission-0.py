

class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append([userId, tweetId])

    def getNewsFeed(self, userId: int) -> List[int]:
        feed = []
        followees = self.follows.get(userId, set())
        for i in range(len(self.tweets) - 1, -1, -1):
            posterId, tweetId = self.tweets[i]
            if userId == posterId or posterId in followees:
                feed.append(tweetId)

            if len(feed) == 10:
                break;
        return feed;

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId not in self.follows:
            self.follows[followerId] = set() 
        self.follows[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId not in self.follows:
            self.follows[followerId] = set() 
        self.follows[followerId].discard(followeeId)
