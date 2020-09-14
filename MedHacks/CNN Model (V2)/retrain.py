import cxr_dataset as CXR
import eval_model as E
import model as M
import torch
import ctypes


# you will need to customize PATH_TO_IMAGES to where you have uncompressed
# NIH images
if __name__ == '__main__':
    ctypes.cdll.LoadLibrary('caffe2_nvrtc.dll')
    PATH_TO_IMAGES = "x-ray Data"
    WEIGHT_DECAY = 1e-4
    LEARNING_RATE = 0.01
    preds, aucs, model_xray = M.train_cnn(PATH_TO_IMAGES, LEARNING_RATE, WEIGHT_DECAY)
    torch.save(model_xray, 'results/model_v2.pt')

