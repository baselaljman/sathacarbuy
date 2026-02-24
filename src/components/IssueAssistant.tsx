
"use client";

import { useState } from "react";
import { describeCarIssue } from "@/ai/flows/car-issue-description-assistant-flow";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function IssueAssistant({ onSummary }: { onSummary: (summary: string) => void }) {
  const [history, setHistory] = useState<{ role: 'user' | 'model', content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput("");
    setHistory(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await describeCarIssue({
        history,
        currentMessage: userMsg
      });

      setHistory(prev => [...prev, { role: 'model', content: response.response }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg border-2 border-primary/20 overflow-hidden shadow-xl bg-white">
      <CardHeader className="bg-primary text-white p-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="h-5 w-5 text-accent" />
          المساعد الذكي للبلاغات
        </CardTitle>
        <p className="text-xs text-primary-foreground/80">ساعدنا في فهم المشكلة لنرسل المعدات المناسبة.</p>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[300px] p-4">
          <div className="space-y-4">
            {history.length === 0 && (
              <div className="text-center py-10 text-muted-foreground">
                <Bot className="h-10 w-10 mx-auto mb-2 opacity-20" />
                <p className="text-sm font-medium">أهلاً بك! صف لي باختصار ماذا حدث لسيارتك.</p>
              </div>
            )}
            {history.map((msg, i) => (
              <div key={i} className={cn(
                "flex gap-3 max-w-[85%]",
                msg.role === 'user' ? "mr-auto flex-row-reverse" : "ml-auto"
              )}>
                <div className={cn(
                  "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg border shadow",
                  msg.role === 'user' ? "bg-white" : "bg-primary text-white"
                )}>
                  {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={cn(
                  "rounded-2xl px-4 py-2 text-sm shadow-sm",
                  msg.role === 'user' 
                    ? "bg-accent/10 text-foreground rounded-tl-none" 
                    : "bg-muted text-foreground rounded-tr-none border"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 ml-auto max-w-[85%] animate-pulse">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Bot className="h-4 w-4 opacity-50" />
                </div>
                <div className="h-8 w-24 bg-muted rounded-2xl" />
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 bg-muted/50 border-t flex flex-col gap-3">
        <div className="flex w-full gap-2">
          <Input 
            placeholder="اكتب رسالتك هنا..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="bg-white"
          />
          <Button size="icon" onClick={handleSend} disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {history.length > 2 && (
          <Button 
            variant="outline" 
            className="w-full text-xs font-semibold hover:bg-primary hover:text-white"
            onClick={() => {
              const lastModelResponse = [...history].reverse().find(m => m.role === 'model')?.content;
              if (lastModelResponse) onSummary(lastModelResponse);
            }}
          >
            استخدم هذا الوصف كملخص للحالة
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
