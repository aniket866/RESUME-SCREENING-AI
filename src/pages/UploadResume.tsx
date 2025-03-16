
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FileUp, File, CheckCircle, AlertCircle, Trash2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function UploadResume() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(selectedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document (.pdf, .doc, .docx)",
          variant: "destructive",
        });
        return;
      }
      
      // Check file size (5MB max)
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload your resume",
        variant: "destructive",
      });
      return;
    }
    
    setIsUploading(true);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      toast({
        title: "Upload successful",
        description: "Your resume has been uploaded and is being analyzed",
      });
      
      // Redirect to dashboard after upload
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast({
        title: "Upload failed",
        description: "An error occurred while uploading your resume",
        variant: "destructive",
      });
    } finally {
      clearInterval(interval);
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 animate-slide-up">
          <h1 className="text-3xl font-bold mb-4">Upload Your Resume</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant feedback on your resume with our AI-powered analysis. See how well your resume performs against ATS systems and get suggestions for improvement.
          </p>
        </div>
        
        <Card className="glass-card border-none animate-scale-in animation-delay-100">
          <CardHeader>
            <CardTitle>Resume Upload</CardTitle>
            <CardDescription>
              Upload your resume for analysis. We support PDF and Word documents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label>Upload Resume</Label>
                <div 
                  className={`border-2 border-dashed rounded-lg p-10 text-center transition-colors ${
                    file ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  {file ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="size-14 flex items-center justify-center bg-primary/10 rounded-full">
                        <File className="size-6 text-primary" />
                      </div>
                      <div className="font-medium">{file.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={handleRemoveFile}
                        className="mt-2"
                      >
                        <Trash2 className="mr-2 size-4" />
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div 
                        className="size-14 flex items-center justify-center bg-muted rounded-full"
                      >
                        <FileUp className="size-6 text-muted-foreground" />
                      </div>
                      <div className="font-medium">
                        <span>Drag and drop or</span>{" "}
                        <span 
                          className="text-primary cursor-pointer" 
                          onClick={() => fileInputRef.current?.click()}
                        >
                          browse
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        PDF, DOC, DOCX up to 5MB
                      </div>
                    </div>
                  )}
                  
                  <Input 
                    ref={fileInputRef}
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="jobDescription">Job Description (Optional)</Label>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste the job description here for a more tailored analysis..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={5}
                />
                <p className="text-sm text-muted-foreground">
                  Adding a job description will help us analyze how well your resume matches the specific role.
                </p>
              </div>
            
              <Button 
                type="submit" 
                disabled={!file || isUploading} 
                className="w-full"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Uploading... {uploadProgress}%
                  </>
                ) : (
                  "Upload and Analyze"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Privacy Protected</p>
                <p>Your resume data is processed securely and not shared with third parties</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Instant Analysis</p>
                <p>Get detailed feedback and scores immediately after upload</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
