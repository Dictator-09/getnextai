import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const CONSENT_KEY = 'getnextai_consent';

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [policiesChecked, setPoliciesChecked] = useState(false);
  const [cookiesChecked, setCookiesChecked] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem(CONSENT_KEY);
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ policies: true, cookies: true }));
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    if (policiesChecked) {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ policies: true, cookies: cookiesChecked }));
      setShowBanner(false);
    }
  };

  const canProceed = policiesChecked;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-[100] max-w-3xl mx-auto"
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
                    We value your privacy. Please review our policies and cookie preferences.
                  </p>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 bg-muted/30 rounded-xl p-4">
                {/* Policies Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="policies"
                    checked={policiesChecked}
                    onCheckedChange={(checked) => setPoliciesChecked(checked === true)}
                    className="mt-0.5"
                  />
                  <label htmlFor="policies" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                    <span className="text-foreground font-medium">I agree to the policies</span> —{' '}
                    <Link to="/privacy-policy" target="_blank" className="text-primary hover:underline">Privacy Policy</Link>,{' '}
                    <Link to="/terms-of-service" target="_blank" className="text-primary hover:underline">Terms of Service</Link>
                    <span className="text-destructive ml-1">*</span>
                  </label>
                </div>

                {/* Cookies Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="cookies"
                    checked={cookiesChecked}
                    onCheckedChange={(checked) => setCookiesChecked(checked === true)}
                    className="mt-0.5"
                  />
                  <label htmlFor="cookies" className="text-sm text-muted-foreground cursor-pointer leading-relaxed flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-primary" />
                    <span>
                      <span className="text-foreground font-medium">Accept cookies</span> — for analytics & enhanced experience.{' '}
                      <Link to="/cookie-policy" target="_blank" className="text-primary hover:underline">Learn more</Link>
                    </span>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <p className="text-xs text-muted-foreground flex-1">
                  <span className="text-destructive">*</span> Required to continue
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={handleAcceptSelected}
                    disabled={!canProceed}
                    className="flex-1 sm:flex-none"
                  >
                    Accept Selected
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="flex-1 sm:flex-none"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsentBanner;
