import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

function ShoppingOrderDetailsView({ orderDetails }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-6">
        <div className="grid gap-2">
          {/* Order ID */}
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>{orderDetails?._id || "N/A"}</Label>
          </div>

          {/* Order Date */}
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label>
              {orderDetails?.orderDate
                ? orderDetails?.orderDate.split("T")[0]
                : "N/A"}
            </Label>
          </div>

          {/* Order Price */}
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>${orderDetails?.totalAmount || "N/A"}</Label>
          </div>

          {/* Payment Method */}
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment method</p>
            <Label>{orderDetails?.paymentMethod || "N/A"}</Label>
          </div>

          {/* Payment Status */}
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment Status</p>
            <Label>{orderDetails?.paymentStatus || "N/A"}</Label>
          </div>

          {/* Order Status */}
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>
              <Badge
                className={`py-1 px-3 ${
                  orderDetails?.orderStatus === "confirmed"
                    ? "bg-green-500"
                    : orderDetails?.orderStatus === "rejected"
                    ? "bg-red-600"
                    : "bg-black"
                }`}
              >
                {orderDetails?.orderStatus || "N/A"}
              </Badge>
            </Label>
          </div>
        </div>

        <Separator />

        {/* Order Details */}
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
              {orderDetails?.cartItems && orderDetails?.cartItems.length > 0 ? (
                orderDetails?.cartItems.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>Title: {item.title || "N/A"}</span>
                    <span>Quantity: {item.quantity || 0}</span>
                    <span>Price: ${item.price || "N/A"}</span>
                  </li>
                ))
              ) : (
                <li>No items in the order</li>
              )}
            </ul>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>{user?.userName || "N/A"}</span>
              <span>{orderDetails?.addressInfo?.address || "N/A"}</span>
              <span>{orderDetails?.addressInfo?.city || "N/A"}</span>
              <span>{orderDetails?.addressInfo?.pincode || "N/A"}</span>
              <span>{orderDetails?.addressInfo?.phone || "N/A"}</span>
              <span>{orderDetails?.addressInfo?.notes || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default ShoppingOrderDetailsView;
