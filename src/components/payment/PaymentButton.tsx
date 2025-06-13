import { useState } from "react";
import { TCoinBody } from "../../types/payment";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import { useStartNicePayment } from "../../hooks/useNicePayment/useStartPayment";
import { useCompleteNicePayment } from "../../hooks/useNicePayment/useCompletePayment";

interface PaymentButtonProps {
  selectedPayOption: string | null;
  isChecked: boolean;
  selectItem: TCoinBody;
}

const PaymentButton = ({ selectedPayOption, isChecked, selectItem }: PaymentButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  const { mutate: startNicePayment } = useStartNicePayment();
  const { mutate: completeNicePayment } = useCompleteNicePayment();

  const handleClickPay = () => {
    if (selectedPayOption === null) {
      alert("결제 수단을 선택해주세요.");
      return;
    }
    setIsModalOpen((prev) => !prev);
  };

  const handlePayCard = (paymentId: string) => {
    completeNicePayment(
      {
        paymentId: paymentId,
      },
      {
        onSuccess: () => {
          setIsCompleted(true);
          setIsModalOpen(true);
        },
        onError: (error) => {
          console.error(error.message);
          setIsModalOpen(false);
        },
      }
    );
  };

  // 결제 요청
  const handleCompletePay = () => {
    startNicePayment(
      {
        itemId: selectItem.id,
        price: selectItem.price,
      },
      {
        onSuccess: (response) => {
          const paymentId = response.result.paymentId;
          handlePayCard(paymentId);
        },
        onError: (error) => {
          console.error(error.message);
          setIsModalOpen(false);
        },
      }
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen((prev) => !prev);
    if (isCompleted) {
      navigate("/my");
    }
  };

  return (
    <>
      <button
        className={`w-full max-w-content h-navbar py-6 bottom-0 fixed text-white-100 flex justify-center items-center text-[20px] ${
          isChecked ? "bg-blue-500" : "bg-gray-400 pointer-events-none"
        }`}
        onClick={handleClickPay}
      >
        구매하기
      </button>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSuccess={isCompleted ? handleCloseModal : handleCompletePay}
          title={isCompleted ? "구매가 완료되었습니다." : "구매하시겠습니까?"}
          btn1Text={isCompleted ? null : "아니요"}
          btn2Text={isCompleted ? "확인" : "네, 구매하겠습니다"}
        />
      )}
    </>
  );
};

export default PaymentButton;
