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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-[100] max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Welcome to GetNextAI
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Please review and accept our policies:{' '}
                    <Link to="/privacy-policy" target="_blank" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    ,{' '}
                    <Link to="/terms-of-service" target="_blank" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                    , and{' '}
                    <Link to="/cookie-policy" target="_blank" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>
                  </p>
                </div>
              </div>

              {/* Checkbox & Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-2 flex-1">
                  <Checkbox
                    id="consent"
                    checked={isChecked}
                    onCheckedChange={(checked) => setIsChecked(checked === true)}
                  />
                  <label 
                    htmlFor="consent" 
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    I agree to all policies
                  </label>
                </div>

                <Button
                  onClick={handleAccept}
                  disabled={!isChecked}
                  className="w-full sm:w-auto"
                >
                  {isChecked && <Check className="w-4 h-4 mr-2" />}
                  Accept & Continue
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsentModal;
