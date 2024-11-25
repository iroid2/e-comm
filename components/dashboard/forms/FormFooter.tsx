import CloseButton from "@/components/front/formInputs/CloseButton";
import SubmitButton from "@/components/front/formInputs/SubmitButton";
import React from "react";
 

export default function FormFooter({
  href,
  editingId,
  loading,
  title,
  parent,
}: {
  href: string;
  editingId: string | undefined;
  loading: boolean;
  title: string;
  parent?: string;
}) {
  return (
    <div className="flex items-center  gap-2 py-4 justify-between ">
      <CloseButton href={href} parent={parent} />
      <SubmitButton
        title={editingId ? `Update ${title}` : `Save ${title}`}
        loading={loading}
      />
    </div>
  );
}
