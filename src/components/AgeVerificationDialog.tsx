
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AgeVerificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AgeVerificationDialog = ({ open, onOpenChange }: AgeVerificationDialogProps) => {
  const navigate = useNavigate();

  const handleDeny = () => {
    window.location.href = 'https://www.google.com';
  };

  const handleAccept = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Age Verification Required</DialogTitle>
          <DialogDescription>
            You must be at least 18 years old to access this website. Please confirm your age to continue.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={handleDeny}>
            I am under 18
          </Button>
          <Button onClick={handleAccept}>
            I am 18 or older
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationDialog;
