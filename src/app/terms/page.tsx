"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import ReactMarkdown from "react-markdown";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface LegalDocument {
  doc_type: string;
  lang: string;
  title: string;
  body_md: string;
}

export default function TermsPage() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'terms-ko';
  const [documents, setDocuments] = useState<LegalDocument[]>([]);
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  useEffect(() => {
    async function fetchDocuments() {
      const { data, error } = await supabase
        .from('legal_documents')
        .select('*')
        .eq('is_published', true)
        .order('updated_at', { ascending: false });

      if (!error && data) {
        setDocuments(data as LegalDocument[]);
      }
    }
    fetchDocuments();
  }, []);

  // 문서 분류
  const termsKo = documents.find(d => d.doc_type === 'terms' && d.lang === 'ko');
  const privacyKo = documents.find(d => d.doc_type === 'privacy' && d.lang === 'ko');
  const termsEn = documents.find(d => d.doc_type === 'terms' && d.lang === 'en');
  const privacyEn = documents.find(d => d.doc_type === 'privacy' && d.lang === 'en');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* 모바일: Select 드롭다운 */}
          <div className="md:hidden mb-8">
            <Select value={selectedTab} onValueChange={setSelectedTab}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="terms-ko">이용약관</SelectItem>
                <SelectItem value="privacy-ko">개인정보처리방침</SelectItem>
                <SelectItem value="terms-en">Terms of Service</SelectItem>
                <SelectItem value="privacy-en">Privacy Policy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            {/* PC: 탭 네비게이션 */}
            <TabsList className="hidden md:grid w-full grid-cols-4">
              <TabsTrigger value="terms-ko">이용약관</TabsTrigger>
              <TabsTrigger value="privacy-ko">개인정보처리방침</TabsTrigger>
              <TabsTrigger value="terms-en">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy-en">Privacy Policy</TabsTrigger>
            </TabsList>

            <TabsContent value="terms-ko" className="mt-8">
              {termsKo ? (
                <article className="prose prose-neutral max-w-none">
                  <ReactMarkdown>{termsKo.body_md}</ReactMarkdown>
                </article>
              ) : (
                <p className="text-muted-foreground">이용약관을 불러올 수 없습니다.</p>
              )}
            </TabsContent>

            <TabsContent value="privacy-ko" className="mt-8">
              {privacyKo ? (
                <article className="prose prose-neutral max-w-none">
                  <ReactMarkdown>{privacyKo.body_md}</ReactMarkdown>
                </article>
              ) : (
                <p className="text-muted-foreground">개인정보처리방침을 불러올 수 없습니다.</p>
              )}
            </TabsContent>

            <TabsContent value="terms-en" className="mt-8">
              {termsEn ? (
                <article className="prose prose-neutral max-w-none">
                  <ReactMarkdown>{termsEn.body_md}</ReactMarkdown>
                </article>
              ) : (
                <p className="text-muted-foreground">Terms of Service not available.</p>
              )}
            </TabsContent>

            <TabsContent value="privacy-en" className="mt-8">
              {privacyEn ? (
                <article className="prose prose-neutral max-w-none">
                  <ReactMarkdown>{privacyEn.body_md}</ReactMarkdown>
                </article>
              ) : (
                <p className="text-muted-foreground">Privacy Policy not available.</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
