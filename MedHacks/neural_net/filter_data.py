import csv
import pandas as pd

def filter_data_set():
    df1 = pd.read_csv('nih_labels.csv')
    df2 = pd.read_csv('starter_images.csv')
    s1 = pd.merge(df1, df2, how='inner', on=['Image Index'])

    s2 = pd.DataFrame(s1, columns=['Image Index','Follow-up #','Patient ID','Patient Age','Patient Gender','View Position','Cardiomegaly','Emphysema','Effusion','Hernia','Infiltration','Mass','Nodule','Atelectasis','Pneumothorax','Pleural_Thickening','Pneumonia','Fibrosis','Edema','Consolidation','fold'])
    s2.to_csv('filter_labels.csv', index=False, header=True)


    
    
                
           
                            
                    
