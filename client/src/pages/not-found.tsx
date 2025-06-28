import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-doc-bg pt-16">
      <Card className="w-full max-w-md mx-4 bg-white dark:bg-doc-surface border-gray-200 dark:border-doc-border">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-doc-text">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-doc-text-muted">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
