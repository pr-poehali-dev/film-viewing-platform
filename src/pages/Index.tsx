import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [likes, setLikes] = useState(2847);
  const [dislikes, setDislikes] = useState(142);
  const [views, setViews] = useState(12543);
  const [onlineUsers, setOnlineUsers] = useState(34);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Анна М.",
      text: "Отличный фильм! Напряжённый сюжет от начала до конца",
      rating: 5,
      time: "2 часа назад",
    },
    {
      id: 2,
      author: "Дмитрий К.",
      text: "Визуальная подача на высоте, но концовка немного предсказуема",
      rating: 4,
      time: "5 часов назад",
    },
    {
      id: 3,
      author: "Елена П.",
      text: "Актёрская игра потрясающая, особенно главный герой",
      rating: 5,
      time: "1 день назад",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);
    return () => clearInterval(interval);
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

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Вы",
        text: newComment,
        rating: 5,
        time: "сейчас",
      };
      setComments((prev) => [comment, ...prev]);
      setNewComment("");
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={`${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon name="Play" size={32} className="text-white" />
            <h1 className="text-2xl font-bold">КИНОТЕАТР</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} className="text-gray-400" />
              <span className="text-sm text-gray-400">
                Онлайн: {onlineUsers}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Eye" size={20} className="text-gray-400" />
              <span className="text-sm text-gray-400">
                Просмотров: {views.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-6">
              <img
                src="/img/9e909f56-14a9-4660-8f66-ecad04a48cba.jpg"
                alt="Movie poster"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <Button
                  size="lg"
                  className="rounded-full w-20 h-20 bg-white text-black hover:bg-gray-200"
                >
                  <Icon name="Play" size={32} />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black bg-opacity-80 rounded p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-600 rounded-full h-1">
                      <div className="bg-red-500 h-1 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-sm text-white">42:15 / 2:18:33</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Movie Info */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">ЗАГАДОЧНЫЙ ТРИЛЛЕР</h2>
              <p className="text-gray-400 mb-4">
                Режиссёр: Алексей Иванов • 2024 • 2ч 18мин
              </p>
              <p className="text-gray-300 leading-relaxed">
                Детектив расследует серию загадочных исчезновений в небольшом
                городке. Каждая улика ведёт к новым тайнам, а правда оказывается
                страшнее любых предположений.
              </p>
            </div>

            {/* Rating Actions */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant={isLiked ? "default" : "outline"}
                onClick={handleLike}
                className={`flex items-center gap-2 ${isLiked ? "bg-green-600 hover:bg-green-700" : "border-gray-600 hover:bg-gray-800"}`}
              >
                <Icon name="ThumbsUp" size={20} />
                <span>{likes.toLocaleString()}</span>
              </Button>
              <Button
                variant={isDisliked ? "default" : "outline"}
                onClick={handleDislike}
                className={`flex items-center gap-2 ${isDisliked ? "bg-red-600 hover:bg-red-700" : "border-gray-600 hover:bg-gray-800"}`}
              >
                <Icon name="ThumbsDown" size={20} />
                <span>{dislikes.toLocaleString()}</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-600 hover:bg-gray-800"
              >
                <Icon name="Share2" size={20} />
                <span>Поделиться</span>
              </Button>
            </div>

            {/* Comments Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Комментарии ({comments.length})
              </h3>

              {/* Add Comment */}
              <div className="mb-6">
                <Textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Поделитесь своим мнением о фильме..."
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-500 mb-3"
                  rows={3}
                />
                <Button
                  onClick={handleAddComment}
                  className="bg-white text-black hover:bg-gray-200"
                >
                  Добавить комментарий
                </Button>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <Card
                    key={comment.id}
                    className="bg-gray-900 border-gray-700 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gray-700 text-white text-sm">
                          {comment.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-white">
                            {comment.author}
                          </span>
                          <div className="flex items-center gap-1">
                            {renderStars(comment.rating)}
                          </div>
                          <span className="text-gray-500 text-sm">
                            {comment.time}
                          </span>
                        </div>
                        <p className="text-gray-300">{comment.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900 border-gray-700 p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Статистика</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Просмотров</span>
                  <span className="text-white font-semibold">
                    {views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Лайков</span>
                  <span className="text-green-500 font-semibold">
                    {likes.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Дизлайков</span>
                  <span className="text-red-500 font-semibold">
                    {dislikes.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Онлайн</span>
                  <span className="text-blue-500 font-semibold">
                    {onlineUsers}
                  </span>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-lg font-bold mb-4">Рекомендуемые фильмы</h3>
              <div className="space-y-3">
                {[
                  "Ночной детектив",
                  "Тайна старого дома",
                  "Последний свидетель",
                ].map((title, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer"
                  >
                    <div className="w-12 h-8 bg-gray-700 rounded"></div>
                    <div>
                      <p className="text-sm font-medium text-white">{title}</p>
                      <p className="text-xs text-gray-400">2024 • 1ч 45мин</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
