
import { useState } from "react";
import Button from "../../EditProfile/common/Button";
import MainImgUpload from "./MainImgUpload";
import SelectCategory from "./SelectCategory";
import SubImgUpload from "./SubImgUpload";
import SelectStatus from "./SelectStatus";
import SetLocationModal from "./SetLocationModal";

function AdminFitnessUpload() {

  const category: string[] = ["헬스", "필라테스", "요가", "기타"];
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const status: string[] = ["구매 가능", "구매 불가"];
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const [isModal, setIsModal] = useState(false);

  const handleModalOpen = () => { 
    setIsModal(!isModal);
  };

  const handleModalClose = () => {
    setIsModal(false);
  }

  return (
    <div className="w-full h-full overflow-y-auto">
      <h1 className="adminTitle">피트니스 센터 → 시설 등록</h1>
      <form>
        <div className="flex gap-6 mb-3">
          {/* 왼쪽 */}
          <div className="flex flex-col gap-4 w-[300px] ">
            <label htmlFor="fitnessName">
              업체명
              <input 
                type="text" 
                id="fitnessName" 
                className="w-[300px] h-[30px] border border-gray-450 rounded-[3px] "
              />
            </label>
            <div className="flex flex-col">
              <label htmlFor="address">주소</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  id="address" 
                  className="w-[240px] h-[30px] border border-gray-450 rounded-[3px] "
                />
                <button
                  type="button" 
                  onClick={handleModalOpen}
                  className="w-[53px] h-[30px] text-[14px] text-medium text-white-100 border bg-gray-400 rounded-[5px]"
                >검색
                </button>
              </div>
            </div>
            <label htmlFor="fee">
              정가
              <input 
                type="text" 
                id="fee" 
                className="w-[300px] h-[30px] border border-gray-450 rounded-[3px] "
              />
            </label>
          </div>

          {/* 중간 */}
          <div className="flex flex-col gap-4 w-[300px]">
            {/* 이미지 업로드 */}
            <MainImgUpload />
            <label htmlFor="phoneNumber">
              전화번호
              <input 
                type="text" 
                id="phoneNumber" 
                className="w-[300px] h-[30px] border border-gray-450 rounded-[3px] "
              />
            </label>
            <label htmlFor="totalFee">
              판매가
              <input 
                type="text" 
                id="totalFee" 
                className="w-[300px] h-[30px] border border-gray-450 rounded-[3px] "
              />
            </label>
          </div>

          {/* 오른쪽 */}
          <div className="flex flex-col gap-4 w-[300px]">
            <SubImgUpload />
            <SelectCategory category={category} onCategoryChange={setSelectedCategory} />
            <SelectStatus status={status} onStatusChange={setSelectedStatus} />
          </div>
        </div>

        {/* textarea */}
        <textarea className="w-full h-[270px] resize-none border border-gray-450 rounded-[3px] pl-2 pt-2" placeholder="시설 소개 내용을 적어주세요"/>

        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="time">이용시간</label>

          <label htmlFor="howToUse">
            이용 방법 안내
            <input 
              type="text" 
              id="howToUse" 
              className="w-full h-[30px] border border-gray-450 rounded-[3px] pl-2"
              placeholder="패스 구매 전 전화 후 패스 구매하기. 시설에 방문하여 이용 가능 패스 사용 내역 보여주기"
            />
          </label>
          <label htmlFor="etc">
            기타 사항
            <input 
              type="text" 
              id="etc" 
              className="w-full h-[30px] border border-gray-450 rounded-[3px] pl-2"
              placeholder="주차 불가능, 옷 대여 가능"
            />
          </label>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={false}
            text="등록하기" 
            className="w-[150px] "/>
        </div>
      </form>

      {isModal && (
        <SetLocationModal onClose={handleModalClose} />
      ) }
    </div>
  );
}

export default AdminFitnessUpload;