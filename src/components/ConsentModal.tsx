import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const CONSENT_KEY = 'getnextai_policy_consent';

const ConsentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem(CONSENT_KEY);
    if (!hasConsented) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    if (isChecked) {
      localStorage.setItem(CONSENT_KEY, 'true');
      setShowModal(false);
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl"
          >
            {/* Icon */}
            <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-display font-bold text-foreground text-center mb-3">
              Welcome to GetNextAI
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
              Before you continue, please review and accept our policies to ensure a transparent and secure experience.
            </p>

            {/* Policy Links */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6 space-y-2">
              <Link 
                to="/privacy-policy" 
                target="_blank"
                className="block text-sm text-primary hover:underline"
              >
                → Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                target="_blank"
                className="block text-sm text-primary hover:underline"
              >
                → Terms of Service
              </Link>
              <Link 
                to="/cookie-policy" 
                target="_blank"
                className="block text-sm text-primary hover:underline"
              >
                → Cookie Policy
              </Link>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 mb-6">
              <Checkbox
                id="consent"
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked === true)}
                className="mt-0.5"
              />
              <label 
                htmlFor="consent" 
                className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
              >
                I have read and agree to the{' '}
                <span className="text-foreground font-medium">Privacy Policy</span>,{' '}
                <span className="text-foreground font-medium">Terms of Service</span>, and{' '}
                <span className="text-foreground font-medium">Cookie Policy</span>.
              </label>
            </div>

            {/* Accept Button */}
            <Button
              onClick={handleAccept}
              disabled={!isChecked}
              className="w-full"
              size="lg"
            >
              {isChecked && <Check className="w-4 h-4 mr-2" />}
              Accept & Continue
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsentModal;
