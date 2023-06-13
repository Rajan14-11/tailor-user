import { UIButton } from "../Common/Buttons/UIButton";
import AddressForm from "./AddressForm";
import { Address as AddressProp } from "./CheckoutMain";

interface AddressProps {
  adr: AddressProp;
  selectAddress: Function;
  enableAddressEditForm: Function;
  confirmDeliveryAddress: Function;
  onAddressSubmit:Function
}
export const Address = ({
  adr,
  selectAddress,
  enableAddressEditForm,
  confirmDeliveryAddress,
  onAddressSubmit,
}: AddressProps) => {
  return (
    <div className="flex items-start py-8 ml-4 sm:ml-20 bg-white">
      <div>
        <input name="address" onClick={() => selectAddress(adr)} type="radio" />
      </div>
      <div className="flex justfy-between flex-wrap items-center pl-6 w-full">
        {!adr.edit ? (
          <div className="w-full">
            <div className="flex sm:justfy-between flex-wrap w-full pb-4 font-bold ">
              <div className="font-primary">
                <span>{adr.name}</span>
                <span className="inline-block mx-4 uppercase bg-neutral font-semibold px-2 text-sm rounded text-neutralFocus">
                  {adr.addressType}
                </span>
                <span className="sm:mx-4">{adr.mobileNumber}</span>
              </div>
              {adr.selected && (
                <button
                  onClick={() => enableAddressEditForm(adr)}
                  className="font-neutral text-neutralFocus font-semibold "
                >
                  EDIT
                </button>
              )}
            </div>
            <div className="font-primary">
              {adr.address} <br /> {`${adr.state} - ${adr.pinCode}`}
            </div>
            {adr.selected && (
              <UIButton
                title="DELIVERY HERE"
                onClick={() => confirmDeliveryAddress(adr)}
              />
            )}
          </div>
        ) : (
          <AddressForm
            withoutLayout={true}
            onSubmitForm={onAddressSubmit}
            initialData={adr}
          />
        )}
      </div>
    </div>
  );
};
