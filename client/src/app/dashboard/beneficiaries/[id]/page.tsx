"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axiosClient from "@/constants/axiosClient";
import { baseUrl } from "@/constants";
import { AxiosError, isAxiosError } from "axios";

interface Beneficiary {
  id: number;
  name: string;
  accountNumber: string;
  bankName: string;
  ifscCode: string;
  email: string;
  phone: string;
  accountId: number;
}

function UpdateBeneficiary() {
  const [beneficiary, setBeneficiary] = useState<Beneficiary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const { id } = useParams();

  let id_use: string | undefined;
  if (typeof id === "string") {
    id_use = id.split("%")[1]?.split("D")[1];
  }

  useEffect(() => {
    const fetchBeneficiary = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`${baseUrl}/beneficiary/beneficiaries/${id_use}`, {
          withCredentials: true,
        });
        setBeneficiary(response?.data?.data);
      } catch (err: unknown) {
        if (isAxiosError(err)) {
          console.error("Error fetching beneficiary:", err.response);
          setError(err.response?.data?.message || "Failed to fetch beneficiary details.");
        } else {
          console.error("Unexpected error:", err);
          setError("An unexpected error occurred while fetching beneficiary details.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id_use) {
      fetchBeneficiary();
    }
  }, [id_use]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBeneficiary((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleUpdate = async () => {
    if (!beneficiary) return;

    try {
      setIsSubmitting(true);
      await axiosClient.put(`${baseUrl}/beneficiary/beneficiaries/${id_use}`, beneficiary, {
        withCredentials: true,
      });
      router.push("/dashboard/beneficiaries/all");
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        console.error("Error updating beneficiary:", err.response);
        setError(err.response?.data?.message || "Failed to update beneficiary. Please try again.");
      } else {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred while updating the beneficiary.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <p>Loading beneficiary details...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-2xl w-full mx-auto mt-10 p-6 rounded-lg">
      <h2 className="text-4xl font-bold text-black mb-6 text-center">Update Beneficiary</h2>

      {beneficiary && (
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={beneficiary.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={beneficiary.accountNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={beneficiary.bankName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">IFSC Code</label>
              <input
                type="text"
                name="ifscCode"
                value={beneficiary.ifscCode}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={beneficiary.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={beneficiary.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Account ID</label>
              <input
                type="number"
                name="accountId"
                value={beneficiary.accountId}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full mt-6 p-2 text-white font-bold rounded-md ${isSubmitting ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Beneficiary"}
          </button>
        </form>
      )}
    </div>
  );
}

export default UpdateBeneficiary;
