import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetNotices } from "../../apis/mypage/quries/useNoticeApi"; // react-query 훅을 가져옵니다
import SvgIcLeftPage from "../../assets/svg/IcLeftPage";
import SvgIcRightPage from "../../assets/svg/IcRightPage";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import NotFound from "../NotFound";

export interface Notice {
  id: number;
  noticeType: string;
  title: string;
  createdAt: string;
  imageUrl: string;
  content: string;
  views: number;
}

export interface NoticesResponse {
  content: { content: Notice[]; totalElements: number | undefined; totalPages: number };
}

const NoticeList = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const { data, error, isLoading } = useGetNotices(currentPage - 1, itemsPerPage);

  if (isLoading) return <LoadingSpinner />;
  if (error instanceof Error) {
    console.log(error.message);
    return <NotFound />;
  }

  const noticesData = data;
  const notices: Notice[] = noticesData?.content?.content?.slice() ?? [];
  const totalPages: number = noticesData?.content?.totalPages ?? 1;

  const pagesPerGroup = 5;
  const currentGroup = Math.ceil(currentPage / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative flex flex-col min-h-[calc(100vh-165px)] overflow-y-auto">
      <ul className="flex-grow">
        {notices.map((notice) => (
          <li
            key={notice.id}
            className="border-b px-6 py-3 flex min-w-[375px]"
            onClick={() => navigate(`/my/notices/${notice.id}`)}
          >
            <span
              className={`font-medium whitespace-nowrap ${
                notice.noticeType === "공지사항"
                  ? "text-blue-500"
                  : notice.noticeType === "이벤트"
                  ? "text-red-600"
                  : "text-gray-500"
              }`}
            >
              [{notice.noticeType === "공지사항" ? "공지" : notice.noticeType}]&nbsp;
            </span>
            <span className="text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">
              {notice.title}
            </span>
          </li>
        ))}
      </ul>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center pt-[14px] gap-[10px] mb-[26px]">
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-350 focus:outline-none"
        >
          <SvgIcLeftPage width={5} />
        </button>

        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={startPage + index}
            onClick={() => handlePageChange(startPage + index)}
            className={`text-sm ${
              currentPage === startPage + index ? "text-gray-600" : "text-gray-350"
            } focus:outline-none`}
          >
            {startPage + index}
          </button>
        ))}

        <button
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-350 focus:outline-none"
        >
          <SvgIcRightPage width={5} />
        </button>
      </div>
    </div>
  );
};

export default NoticeList;
