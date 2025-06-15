import { useEffect, useState } from "react";
import BigDropdown from "../components/payment/BigDropdown";
import PaymentDetails from "../components/payment/PaymentDetails";
import SelectPayOption from "../components/payment/SelectPayOption";
import { COIN_PRICE } from "../constants/price-menu";
import { TCoinBody, TPaymentProps, TPayOption } from "../types/payment";
import PaymentInfo from "../components/payment/PaymentInfo";
import PaymentButton from "../components/payment/PaymentButton";
import { useGetCoinInfo } from "../hooks/useGetAdminCoins";

function Payment({ type }: TPaymentProps) {
  const [selectItem, setSelectItem] = useState<TCoinBody | null>(null);
  const [selectedPayOption, setSelectedPayOption] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const { data: coinInfoData } = useGetCoinInfo();

  // coinInfoData 받아오면 초기값 설정
  useEffect(() => {
    if (coinInfoData?.result?.length) {
      const first = coinInfoData.result[0];
      setSelectItem({
        id: first.coinType,
        coinAmount: first.coinQuantity,
        price: first.price,
        coinExp: first.expirationPeriod,
      });
    }
  }, [coinInfoData]);

  const handlePayOptionChange = (option: TPayOption | null) => {
    setSelectedPayOption(option);
  };

  const dropdownOptions = coinInfoData?.result?.map((item: TCoinBody) => `${item.coinAmount} 코인`);

  return (
    <div className="w-full h-full bg-white-200 overflow-y-auto flex flex-col justify-between">
      <div>
        <div className="w-full h-[140px] bg-white-100 flex flex-col px-[25px] py-[26px] gap-3">
          <p className="text-16px">{type === "buy-coins" ? "코인 요금제 선택" : "플랜 선택"}</p>
          <BigDropdown
            options={dropdownOptions}
            onOptionSelect={(option) => {
              const selectedItem = COIN_PRICE.find((item) => `${item.coinAmount}코인` === option);
              if (selectedItem) {
                setSelectItem(selectedItem);
              }
            }}
          />
        </div>
        <SelectPayOption
          selectedOption={selectedPayOption}
          setSelectedOption={setSelectedPayOption}
          onPayOptionSelect={handlePayOptionChange}
        />
        {selectItem && (
          <PaymentDetails type={type} item={selectItem} paymentMethod={selectedPayOption} />
        )}
        <PaymentInfo isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>

      <PaymentButton
        selectedPayOption={selectedPayOption}
        isChecked={isChecked}
        selectItem={selectItem as TCoinBody}
      />
    </div>
  );
}

export default Payment;
