import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [likes, setLikes] = useState(1543);
  const [dislikes, setDislikes] = useState(87);
  const [siteVisits, setSiteVisits] = useState(25847);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setSiteVisits((prev) => prev + 1);
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikes((prev) => prev - 1);
        setIsDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikes((prev) => prev - 1);
      setIsDisliked(false);
    } else {
      setDislikes((prev) => prev + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikes((prev) => prev - 1);
        setIsLiked(false);
      }
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon name="Film" size={32} className="text-red-500" />
            <h1 className="text-2xl font-bold">КИНОТЕАТР</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} className="text-gray-400" />
              <span className="text-sm text-gray-400">
                Посещений: {siteVisits.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Movie Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">ЭКШН ТРИЛЛЕР</h2>
          <p className="text-gray-400">
            Режиссёр: Михаил Петров • 2024 • 2ч 15мин
          </p>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-8 max-w-4xl mx-auto">
          <img
            src="/img/d83185fe-290f-4e66-b9a7-58d8d8698624.jpg"
            alt="Movie poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Button
              size="lg"
              onClick={togglePlay}
              className="rounded-full w-24 h-24 bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={40} />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black bg-opacity-80 rounded p-3">
              <div className="flex items-center gap-3">
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-1/4 transition-all duration-300"></div>
                </div>
                <span className="text-sm text-white min-w-fit">
                  32:45 / 2:15:30
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Description */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-gray-900 border-gray-700 p-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Профессиональный наёмник получает задание защитить важного
              свидетеля от международной преступной организации. Когда операция
              идёт не по плану, он оказывается в центре смертельной игры, где
              каждый шаг может стать последним.
            </p>
          </Card>
        </div>

        {/* Rating Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-700 p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Как вам фильм?</h3>

              {/* Like/Dislike Buttons */}
              <div className="flex items-center justify-center gap-8 mb-8">
                <Button
                  variant={isLiked ? "default" : "outline"}
                  onClick={handleLike}
                  size="lg"
                  className={`flex items-center gap-3 px-8 py-4 text-lg ${
                    isLiked
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "border-gray-600 hover:bg-gray-800 text-gray-300"
                  }`}
                >
                  <Icon name="ThumbsUp" size={24} />
                  <span>{likes.toLocaleString()}</span>
                </Button>

                <Button
                  variant={isDisliked ? "default" : "outline"}
                  onClick={handleDislike}
                  size="lg"
                  className={`flex items-center gap-3 px-8 py-4 text-lg ${
                    isDisliked
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border-gray-600 hover:bg-gray-800 text-gray-300"
                  }`}
                >
                  <Icon name="ThumbsDown" size={24} />
                  <span>{dislikes.toLocaleString()}</span>
                </Button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Users" size={24} className="text-blue-500" />
                    <span className="text-2xl font-bold text-white">
                      {siteVisits.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-400">Посещений сайта</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon
                      name="ThumbsUp"
                      size={24}
                      className="text-green-500"
                    />
                    <span className="text-2xl font-bold text-white">
                      {likes.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-400">Лайков</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon
                      name="ThumbsDown"
                      size={24}
                      className="text-red-500"
                    />
                    <span className="text-2xl font-bold text-white">
                      {dislikes.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-400">Дизлайков</p>
                </div>
              </div>

              {/* Rating Percentage */}
              <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-lg text-gray-400">Рейтинг фильма:</span>
                  <span className="text-2xl font-bold text-green-500">
                    {Math.round((likes / (likes + dislikes)) * 100)}%
                  </span>
                  <Icon
                    name="TrendingUp"
                    size={24}
                    className="text-green-500"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
