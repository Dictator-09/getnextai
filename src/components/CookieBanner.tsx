import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'getnextai_cookie_consent';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!cookieConsent) {
      // Small delay to let consent modal appear first
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-[90] max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon & Text */}
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    We use cookies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to enhance your browsing experience and analyze site traffic.{' '}
                    <Link 
                      to="/cookie-policy" 
                      className="text-primary hover:underline"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  onClick={handleReject}
                  className="flex-1 md:flex-none"
                >
                  Reject
                </Button>
                <Button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none"
                >
                  Accept All
                </Button>
              </div>

              {/* Close Button */}
              <button
                onClick={handleReject}
                className="absolute top-3 right-3 md:static text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
